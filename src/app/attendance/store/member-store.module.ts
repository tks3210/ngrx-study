import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromMemberStore from './member-store.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMemberStore.memberStoresFeatureKey, fromMemberStore.reducer)
  ]
})
export class MemberStoreModule { }
