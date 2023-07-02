import { Injectable } from '@nestjs/common';
import { TestClass } from './TestClass';
import { validate } from 'class-validator';

@Injectable()
export class AppService {
  async checkIfArrayIssue() {
    const arrayOfClasses = [new TestClass('first'), new TestClass('second')];

    const errorsWithoutOptionsObject = await validate(arrayOfClasses);
    console.log(
      `Amount of errors without options object: ${errorsWithoutOptionsObject.length}`,
    );

    const errorsWithOptionsObject = await validate(arrayOfClasses, {});
    console.log(
      `Amount of errors with options object: ${errorsWithOptionsObject.length}`,
    );
  }
}
