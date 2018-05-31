import { NgModule } from '@angular/core';
// import {MatExpansionModule} from '@angular/material/expansion';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCheckboxModule,
   
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatExpansionModule,
        MatCheckboxModule,
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatExpansionModule,
        MatCheckboxModule,
    ],
})

export class MaterialModule { }
