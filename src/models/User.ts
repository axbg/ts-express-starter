import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Log } from './Log';
import { Setting } from './Setting';
import { Token } from './Token';

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column({ type: 'varchar', length: 50, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 50 })
    firstName: string;

    @Column({ type: 'varchar', length: 25 })
    lastName: string;

    @Column({ type: 'text', nullable: true })
    vault: string;

    @OneToMany(() => Setting, setting => setting.user)
    settings: Setting[];

    @OneToMany(() => Token, token => token.user)
    tokens: Token[];

    @OneToMany(() => Log, log => log.user)
    logs: Log[];

    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

}