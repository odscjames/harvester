import pipes from './pipes/index.js';

class PipeLine {
  constructor(activity, pipeOutputCb) {
    this.activity = activity;
    this.pipeOutputCb = pipeOutputCb;
  }

  run() {
    return new Promise(async resolve => {
      if (this.activity.state == 'deleted') {
        this.pipeOutputCb(this.activity, {});
      } else {
        let extraData = {};
        for (const Pipe of pipes) {
          try {
            const pipeSection = new Pipe(this.activity, extraData);
            extraData = await pipeSection.run();
          } catch (error) {
            console.log(`Error running data through pipe: ${error}`);
          }
        }
        this.pipeOutputCb(this.activity, extraData);
      }

      resolve("All pipes run");
    });
  }

}

export default PipeLine;