class Pipe {
  constructor(activity, extraData) {
    this.activity = activity;
    this.extraData = extraData;
  }

  /* Override this function */
  run(){
    return new Promise(async resolve => {
      console.log(`Running ${this.augmentedActivity.id} - ${this.augmentedActivity.data.name} through ${this.constructor.name}`);
      /* Do stuff to the activity here */
      resolve(this.extraData);
    });
  }

}

export default Pipe