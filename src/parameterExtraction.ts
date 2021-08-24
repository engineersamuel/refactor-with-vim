
// This is purely a toy example, the goal is to extract the individual pieces of logic to class functions which are called in the canBuild function.
// 1. Extract canBuild arguments to typed object
// 2. Extract each piece of logic to a separate function
// 3. For each function then extract those arguments to typed objects
class WarpDriveFactory {

  constructor() {}

  canBuild(driveId: string, starShipId: string, factoryId: number, amount: number, dueDate: Date): boolean {

    // Check if the drive can work in the starship
    if (driveId === '1111-2222-3333' && starShipId === '231') {
      return false;
    }

    // Check if there is enough of the drive id
    if (driveId === '1111-2222-3333' && amount > 2) {
      return false;
    }

    // check if we can build the drive by a particular date
    if (driveId == '1111-2222-3333' && amount === 1 && dueDate < new Date('01/01/2021')) {
      return false;
    }
  
    return true;
  }
}
