import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Location {
  @PrimaryGeneratedColumn("uuid")
  private id: string;

  @Column()
  public name: string;
}
