import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedInitialModels1635882753883 implements MigrationInterface {
    name = 'AddedInitialModels1635882753883'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`settings\` (\`uuid\` char(36) NOT NULL, \`theme\` varchar(10) NOT NULL, \`limit\` int NOT NULL, \`user_uuid\` char(36) NULL, PRIMARY KEY (\`uuid\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tokens\` (\`uuid\` char(36) NOT NULL, \`token\` varchar(256) NOT NULL, \`active\` tinyint NOT NULL, \`created\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`activeUntil\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_uuid\` char(36) NULL, PRIMARY KEY (\`uuid\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`uuid\` char(36) NOT NULL, \`email\` varchar(50) NOT NULL, \`firstName\` varchar(50) NOT NULL, \`lastName\` varchar(25) NOT NULL, \`vault\` text NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`uuid\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`logs\` (\`uuid\` char(36) NOT NULL, \`action\` varchar(10) NOT NULL, \`created\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`user_uuid\` char(36) NULL, PRIMARY KEY (\`uuid\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`settings\` ADD CONSTRAINT \`FK_214aab0c0380e81fb51093595cb\` FOREIGN KEY (\`user_uuid\`) REFERENCES \`users\`(\`uuid\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tokens\` ADD CONSTRAINT \`FK_184446c15200c14b3ea0d9f3d1e\` FOREIGN KEY (\`user_uuid\`) REFERENCES \`users\`(\`uuid\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`logs\` ADD CONSTRAINT \`FK_7432f03daadd86aa4ea78d139e8\` FOREIGN KEY (\`user_uuid\`) REFERENCES \`users\`(\`uuid\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`logs\` DROP FOREIGN KEY \`FK_7432f03daadd86aa4ea78d139e8\``);
        await queryRunner.query(`ALTER TABLE \`tokens\` DROP FOREIGN KEY \`FK_184446c15200c14b3ea0d9f3d1e\``);
        await queryRunner.query(`ALTER TABLE \`settings\` DROP FOREIGN KEY \`FK_214aab0c0380e81fb51093595cb\``);
        await queryRunner.query(`DROP TABLE \`logs\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`tokens\``);
        await queryRunner.query(`DROP TABLE \`settings\``);
    }

}
