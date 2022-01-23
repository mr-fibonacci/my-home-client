export interface IAsyncState<TData, TError> {
  isLoading: boolean;
  data: TData;
  errors: TError;
  feedback: Record<string, string>;
}
