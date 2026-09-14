import { apiClient } from '@/services/shared/infrastructure/api-client';

export const rewardsService = {
  async list(path: string) {
    return apiClient.get(path);
  },
};
