import { Entity, Column } from 'typeorm';

@Entity()
export class Post {
  @Column()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  userId: number;
}
