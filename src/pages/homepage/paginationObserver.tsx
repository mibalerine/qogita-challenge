import { useEffect, useMemo, useState } from "react";
import { Observable } from "../../observers/observable";
import { SIZE } from "../api/products";

type PaginationState = { pageNum: number; totalPages?: number };

export const paginationStore = new Observable<PaginationState>({ pageNum: 1 });

export const usePagination = () => {
  const [pagination, setPagination] = useState<PaginationState>(
    paginationStore.get()
  );

  useEffect(() => {
    return paginationStore.subscribe(setPagination);
  }, []);

  const incrementPageNum = () => {
    paginationStore.set({ pageNum: pagination.pageNum + 1 });
  };

  const decrementPageNum = () => {
    paginationStore.set({
      pageNum: pagination.pageNum > 1 ? pagination.pageNum - 1 : 1,
    });
  };

  const calculateTotalPages = (totalProducts: number) => {
    paginationStore.set({
      ...paginationStore.get(),
      totalPages: Math.ceil(totalProducts / SIZE),
    });
  };

  const actions = useMemo(() => {
    return {
      incrementPageNum,
      decrementPageNum,
      calculateTotalPages,
    };
  }, [pagination]);

  return {
    state: pagination,
    actions,
  };
};
