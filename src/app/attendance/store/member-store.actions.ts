import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { MemberStore } from './member-store.model';

export const loadMemberStores = createAction(
  '[MemberStore/API] Load MemberStores', 
  props<{ memberStores: MemberStore[] }>()
);

export const addMemberStore = createAction(
  '[MemberStore/API] Add MemberStore',
  props<{ memberStore: MemberStore }>()
);

export const upsertMemberStore = createAction(
  '[MemberStore/API] Upsert MemberStore',
  props<{ memberStore: MemberStore }>()
);

export const addMemberStores = createAction(
  '[MemberStore/API] Add MemberStores',
  props<{ memberStores: MemberStore[] }>()
);

export const upsertMemberStores = createAction(
  '[MemberStore/API] Upsert MemberStores',
  props<{ memberStores: MemberStore[] }>()
);

export const updateMemberStore = createAction(
  '[MemberStore/API] Update MemberStore',
  props<{ memberStore: Update<MemberStore> }>()
);

export const updateMemberStores = createAction(
  '[MemberStore/API] Update MemberStores',
  props<{ memberStores: Update<MemberStore>[] }>()
);

export const deleteMemberStore = createAction(
  '[MemberStore/API] Delete MemberStore',
  props<{ id: number }>()
);

export const deleteMemberStores = createAction(
  '[MemberStore/API] Delete MemberStores',
  props<{ ids: number[] }>()
);

export const clearMemberStores = createAction(
  '[MemberStore/API] Clear MemberStores'
);
