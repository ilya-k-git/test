import Dexie, { Table } from 'dexie';

export interface Item {
  id?: number;
  name: string;
}

export interface Article {
  
  title: string;
  description: string;
  dateAddeded: string;
  id?: number;
}

export class AppDB extends Dexie {
  articles!: Table<Article, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
          articles: '++id',
    });
   this.on('populate', () => this.populate());
  }

  async populate() {
    
    await db.articles.bulkAdd([
      {
        title: 'Название 1',
      
        description: 'Описание 1',
      
        dateAddeded: '31.12.2021 00:00:00',

    
      },
      {
        title: 'Название 2',
      
        description: 'Описание 2',
      
        dateAddeded: '31.12.2021 00:00:00',

    
      },
      {
        title: 'Название 3',
      
        description: 'Описание 3',
      
        dateAddeded: '31.12.2021 00:00:00',

    
      },
    ]);
  }

  async resetDatabase() {
    await db.transaction('rw', 'articles', () => {
      this.articles.clear();
     // this.populate();
    });
  }
}

export const db = new AppDB();