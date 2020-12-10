import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatSelectModule, MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, 
        MatFormFieldModule, MatRadioModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, 
        MatSidenavModule, MatToolbarModule, MatCardModule, MatDividerModule, MatExpansionModule, 
        MatGridListModule, MatListModule, MatStepperModule, MatTabsModule, MatTreeModule, MatButtonModule,
        MatButtonToggleModule, MatBadgeModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule,
        MatProgressBarModule, MatRippleModule, MatBottomSheetModule, MatDialogModule, MatSnackBarModule,
        MatTooltipModule, MatPaginatorModule, MatSortModule, MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

@NgModule({
    imports:[],
    exports:[         
        MatListModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatListModule,
        MatStepperModule,
        MatAutocompleteModule,
        MatTabsModule,
        MatTreeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatBadgeModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatRippleModule,
        MatBottomSheetModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        DragDropModule,
        OwlDateTimeModule, //date time picker reference
        OwlNativeDateTimeModule, //date time picker reference
        NgMaterialMultilevelMenuModule
    ]
})

export class AngularMaterialModules {}
