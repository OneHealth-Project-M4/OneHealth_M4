import { hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ScheduledAppointment } from "./appoitments.entity";
import { Diagnostic } from "./diagnostic.entity";
import { UserAddress } from "./useraddress.entity";

@Entity("user")
class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 75 })
  name: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 15 })
  phone: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isAdm: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  hashpassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToOne(() => UserAddress, {
    nullable: true,
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn()
  address: UserAddress;

  @OneToMany(
    () => ScheduledAppointment,
    (scheduledAppointment) => scheduledAppointment.user,
    {
      onDelete: "CASCADE",
    }
  )
  appointment: ScheduledAppointment[];

  @OneToMany(() => Diagnostic, (diagnostic) => diagnostic.user, {
    onDelete: "CASCADE",
  })
  diagnostic: Diagnostic[];
}

export { Users };
