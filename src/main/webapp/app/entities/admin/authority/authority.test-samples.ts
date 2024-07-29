import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'f62bc7bb-ab32-4400-8856-f385dcc84114',
};

export const sampleWithPartialData: IAuthority = {
  name: '28534323-a585-49f7-8b02-f8dfa06dfd79',
};

export const sampleWithFullData: IAuthority = {
  name: '6f494c57-c7c7-4869-a75e-e879ee6c7d57',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
