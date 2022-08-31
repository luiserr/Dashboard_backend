import { Controller, Get } from '@nestjs/common';

@Controller('students')
export class StudentsController {
  @Get()
  getStudent() {
    return [
      {
        id: 1,
        name: 'Luis Rivero',
        phone: '3206537658',
      },
      {
        id: 1,
        name: 'Luis Rivero',
        phone: '3206537658',
      },
    ];
  }
}
