import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { MemberStore } from './member-store.model';
import * as MemberStoreActions from './member-store.actions';

export const memberStoresFeatureKey = 'memberStores';

export interface State extends EntityState<MemberStore> {
  // additional entities state properties
  name: string
}

export const adapter: EntityAdapter<MemberStore> = createEntityAdapter<MemberStore>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  name: 'takeshi'
});

export const reducer = createReducer(
  initialState,
  on(MemberStoreActions.addMemberStore,
    (state, action) => adapter.addOne(action.memberStore, state)
  ),
  on(MemberStoreActions.upsertMemberStore,
    (state, action) => adapter.upsertOne(action.memberStore, state)
  ),
  on(MemberStoreActions.addMemberStores,
    (state, action) => adapter.addMany(action.memberStores, state)
  ),
  on(MemberStoreActions.upsertMemberStores,
    (state, action) => adapter.upsertMany(action.memberStores, state)
  ),
  on(MemberStoreActions.updateMemberStore,
    (state, action) => adapter.updateOne(action.memberStore, state)
  ),
  on(MemberStoreActions.updateMemberStores,
    (state, action) => adapter.updateMany(action.memberStores, state)
  ),
  on(MemberStoreActions.deleteMemberStore,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(MemberStoreActions.deleteMemberStores,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(MemberStoreActions.loadMemberStores,
    (state, action) => adapter.setAll(action.memberStores, state)
  ),
  on(MemberStoreActions.clearMemberStores,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
