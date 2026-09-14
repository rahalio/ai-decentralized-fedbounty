import { apiClient } from '@/services/shared/infrastructure/api-client';

export const lineageService = {
  async list(path: string) {
    return apiClient.get(path);
  },
};
