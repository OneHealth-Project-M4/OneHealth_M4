import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Users } from "./user.entity";
import { UsersMedic } from "./usermedic.entity";

@Entity("scheduled_appointment")
class ScheduledAppointment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 20 })
  type: string;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Users, (user) => user.appointment)
  user: Users;

  @ManyToOne(() => UsersMedic, (usermedic) => usermedic.appointment)
  medic: UsersMedic;
}

export { ScheduledAppointment };
