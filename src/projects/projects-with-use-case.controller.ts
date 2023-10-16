import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { CreateProjectUseCase } from './use-cases/create-project.use-cases';
import { FindAllProjectsUseCase } from './use-cases/find-all-project.use-case';
import { StartProjectUseCase } from './use-cases/start-project.use-case';
import { StartProjectDto } from './dto/start-project.dto';

@Controller('projects')
export class ProjectsWithUseCaseController {
  //Sem regra de negócio, meio para acessar regra de negócio
  @Inject(CreateProjectUseCase)
  private readonly createProjectUseCase: CreateProjectUseCase;

  @Inject(FindAllProjectsUseCase)
  private readonly findAllProjectsUseCase: FindAllProjectsUseCase;

  @Inject(StartProjectUseCase)
  private readonly StartProjectUseCase: StartProjectUseCase;
  //use cases

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.createProjectUseCase.execute(createProjectDto);
  }

  @Get()
  findAll() {
    return this.findAllProjectsUseCase.execute();
  }

  @Post(':id/start')
  start(@Param('id') id: string, @Body() startProjectDto: StartProjectDto) {
    return this.StartProjectUseCase.execute(id, startProjectDto);
  }

  /*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id);
  } */
}
