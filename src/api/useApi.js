import { useQuery, useMutation, useQueryClient } from "react-query";
import APIService from "../../../oneadmin.front.react/src/api/APIService";

export const useFetchData = (key, url, config = {}) => {
  return useQuery(key, () =>
    APIService.get(url, config).then((res) => res.data)
  );
};

export const useAddData = (url, config = {}) => {
  const queryClient = useQueryClient();
  return useMutation((data) => APIService.post(url, data, config), {
    onSuccess: () => {
      queryClient.invalidateQueries(); // update cache
    },
  });
};

export const useUpdateData = (url, config = {}) => {
  const queryClient = useQueryClient();
  return useMutation((data) => APIService.put(url, data, config), {
    onSuccess: () => {
      queryClient.invalidateQueries(); // update cache
    },
  });
};

export const useDeleteData = (url, config = {}) => {
  const queryClient = useQueryClient();
  return useMutation(() => APIService.del(url, config), {
    onSuccess: () => {
      queryClient.invalidateQueries(); // update cache
    },
  });
};

// example
// const { data, error, isLoading } = useFetchData('myDataKey', '/data-endpoint');
// const addDataMutation = useAddData('/data-endpoint');
// const updateDataMutation = useUpdateData('/data-endpoint');
// const deleteDataMutation = useDeleteData('/data-endpoint');

// if (isLoading) return <div>Loading...</div>;
// if (error) return <div>Error loading data</div>;

// const addData = () => {
//     addDataMutation.mutate({ name: 'New Data' });
// };

// const updateData = () => {
//     updateDataMutation.mutate({ id: 1, name: 'Updated Data' });
// };

// const deleteData = () => {
//     deleteDataMutation.mutate(1);
// };
