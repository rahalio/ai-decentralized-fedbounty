import { apiClient } from '@/services/shared/infrastructure/api-client';

export const bountiesService = {
  async list(path: string) {
    return apiClient.get(path);
  },
};
