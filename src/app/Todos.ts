
import { Expose, Type } from "class-transformer";
export class Todos{
    id:number = 0;
    stage_id: number = 0;
    text: string = ''
    isCompleted: boolean = false
    created_at: string = ''
    updated_at: string = ''
    

    @Expose()
      getText() {
      return this.text
    }
    @Expose()
      isDone() {
      return this.isCompleted
    }
    @Expose()
      getCategoryId() {
      return this.stage_id
    }
    @Expose()
      getId() {
      return this.id
    }
  }