import { request } from './api';

export const getAbilityById = (id: number): Promise<any> => request(`ability/${id}`);
