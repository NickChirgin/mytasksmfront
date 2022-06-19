import { Todos } from "./Todos";
import { Expose, Type } from "class-transformer";
export class Category {
      id:number = 0; 
      title: string = ""; 
      @Type(() => Todos)
      tasks: Todos[] = [];
      created_at?: string = ""; 
      updated_at?: string = "" ;
      
      constructor() {
        this.tasks = [new Todos]
      }

      @Expose()
      getTitle() {
      return this.title
    }
      @Expose()
      getTodos() {
      return this.tasks
  }
  }
  