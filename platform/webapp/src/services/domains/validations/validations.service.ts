import { apiClient } from '@/services/shared/infrastructure/api-client';

export const validationsService = {
  async list(path: string) {
    return apiClient.get(path);
  },
};
