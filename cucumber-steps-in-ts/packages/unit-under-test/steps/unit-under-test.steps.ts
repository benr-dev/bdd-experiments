import { binding, given, then, when} from 'cucumber-tsflow';
import { UnitUnderTest } from '../src/unit-under-test';
import { expect } from 'chai';

@binding()
export class UnitUnderTestSteps {
  private unitUnderTest?: UnitUnderTest;
  private result?: string;

  @given(/a unit under test/)
  public givenAUnitUnderTest() {
    this.unitUnderTest = new UnitUnderTest();
  }

  @when(/it does something with no parameters/)
  public whenItDoesSomething() {
    this.result = this.unitUnderTest!.doSomething();
  }

  @when(/it does something with the number (\d*)/)
  public whenItDoesSomethingWithTheNumber(num: number) {
    this.result = this.unitUnderTest!.doSomethingWithThisNumber(num);
  }

  @then(/something happens/)
  public theSomethingHappens() {
    expect(this.result).to.equal('Did something');
  }

  @then(/it outputs '(.*)'/)
  public itOutputs(str: string) {
    expect(this.result).to.equal(str);
  }
}
