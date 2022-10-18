import { IsNotEmpty } from "class-validator"
import { Categoria } from "src/categoria/entities/categoria.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"



@Entity({ name: 'tb_produtos' })
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

}