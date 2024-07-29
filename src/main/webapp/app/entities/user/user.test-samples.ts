import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 761,
  login: 'a-9=&&@q\\+tFkla\\71E9',
};

export const sampleWithPartialData: IUser = {
  id: 1766,
  login: 'D_6i0',
};

export const sampleWithFullData: IUser = {
  id: 21020,
  login: 'ZhzP',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
