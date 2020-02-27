import Pipe from './pipe.js';
import { cache } from '../utils.js';

class TestPipe extends Pipe {

  run(){
    return new Promise(async resolve => {
      console.log(`Running ${this.activity.id} - ${this.activity.data.name} through ${this.constructor.name}`);
      cache.counter++;
      console.log(cache);
      this.extraData['test-data'] = '1234';
      resolve(this.extraData);
    });
  }
}

export default TestPipe;