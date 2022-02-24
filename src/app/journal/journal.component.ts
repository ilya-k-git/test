import { Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppDB } from './db/db';
import { liveQuery } from 'dexie';
import { db } from './db/db';
import * as moment from 'moment';



export interface DialogData {
  dialogArticle: string;
  dialogarticleDescription: string;
}


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})

export class journalComponent {

  public aricleName!: string;
  public articleDescription!: string;
  constructor( public dialog: MatDialog, private Db:AppDB) { }
  minDate3!: string;
 
  articles$ = liveQuery(() => this.listarticles());

  async listarticles() {
   
    return await db.articles.toArray();
  }

  async addItem() {
    await db.articles.add({
      title:this.aricleName,
      description:this.articleDescription,
      dateAddeded: moment().format('DD.MM.YYYY h:mm:ss'),
    });
  }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(dialogaddComponent, {
      width:'280px',
         data: { dialogArticle: '', dialogarticleDescription: '' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.dialogArticle) { 
          this.aricleName = result.dialogArticle
          this.articleDescription = result.dialogarticleDescription
          this.addItem();      
        }
      }
    });
  }

  public deletearicleName(indexToDel: number) {
    this.Db.articles.delete(indexToDel);   
  }
  
  openDialogEdit(articleId:number,title:string,description:string): void {
    const dialogRef = this.dialog.open(dialogeditComponent, {
      width:'280px',
       data: { dialogArticle: title, dialogarticleDescription: description }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.dialogArticle) {
          
          this.Db.articles.update(articleId ,{ title: result.dialogArticle, description: result.dialogarticleDescription})
        }
      }
    });
  }
}

@Component({
  selector: 'dialogadd',
  templateUrl: 'dialogadd.html',
  styleUrls: ['./journal.component.css']

})
export class dialogaddComponent {
  onNoClick(): void {
    this.dialogRef.close();
  }
  public clearField: string = '';
  constructor(public dialogRef: MatDialogRef<dialogaddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}

@Component({
  selector: 'dialogedit',
  templateUrl: 'dialogedit.html',
  styleUrls: ['./journal.component.css']

})
export class dialogeditComponent {
  onNoClick(): void {
    this.dialogRef.close();
  }
  public clearField: string = '';
  constructor(public dialogRef: MatDialogRef<dialogeditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}


