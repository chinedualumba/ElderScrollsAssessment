import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElderScrollsCardsComponent } from './component/elder-scrolls-cards.component';
import { StoreModule } from '@ngrx/store';
import { elderScrollReducer } from './store/reducers/elderScroll.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ElderScrollsEffects } from './store/effects/elderScrolls.effects';
import { ElderScrollsService } from './services/elder-scrolls.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ElderScrollsCardsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature('elderScrollsCards', elderScrollReducer),
    EffectsModule.forFeature([ElderScrollsEffects]),
  ],
  exports: [ElderScrollsCardsComponent],
  providers: [ElderScrollsService],
})
export class ElderScrollsCardsModule {}
