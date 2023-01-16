import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./user.entity";
import { UsersMedic } from "./usermedic.entity";

@Entity("diagnostic")
class Diagnostic {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "text" })
  description: string;

  @ManyToOne(() => Users, (user) => user.diagnostic)
  @JoinColumn({ name: "userid" })
  user: Users;

  @ManyToOne(() => UsersMedic, (userMedic) => userMedic.diagnostic)
  @JoinColumn({ name: "medicid" })
  medic: UsersMedic;
}

export { Diagnostic };
