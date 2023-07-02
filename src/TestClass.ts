import { MinLength } from 'class-validator';

export class TestClass {
  constructor(title: string) {
    this.title = title;
  }

  @MinLength(10)
  title: string;
}
