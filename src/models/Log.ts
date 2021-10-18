import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity('logs')
export class Log {

    @PrimaryGeneratedColumn('uuid')
    uuid: string;

    @Column({ type: 'varchar', length: 10 })
    action: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    created: Date;

    @ManyToOne(() => User, user => user.logs, {onDelete: 'CASCADE'})
    @JoinColumn({ name: 'user_uuid' })
    user: User;
}