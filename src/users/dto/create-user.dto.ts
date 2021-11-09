import { IsString, MinLength, MaxLength } from 'class-validator'

export class CreatUserDto {
  @IsString()
  @MinLength(1)
  @MaxLength(10)
  readonly userName!: string
}
