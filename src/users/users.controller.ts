import { Body, Controller, Param, Post, Query, Response } from '@nestjs/common'
import { CreatUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
  @Post()
  create(
    @Body('username') userName: CreatUserDto,
    @Query('id') id: string,
    @Response() res,
  ) {
    try {
      if (!userName || !id) throw new Error('no userName or No user id')
      res.status(200)
      res.send({ id, userName })
      return { id, userName }
    } catch (e) {
      res.status(400)
      console.log(e)
    }
  }
}
