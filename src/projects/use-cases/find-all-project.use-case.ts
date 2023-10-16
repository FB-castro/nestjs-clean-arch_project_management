import { Inject, Injectable } from '@nestjs/common';
import { IProjectRepository } from '../project.repository';

@Injectable()
export class FindAllProjectsUseCase {
  //use-case para criação de projetos
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepo: IProjectRepository, //Repository em memória
  ) {}

  execute() {
    return this.projectRepo.findAll();
  }
}
