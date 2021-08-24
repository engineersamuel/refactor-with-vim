
type CanBuildArgs = {
  driveId: string;
  starShipId: string;
  factoryId: number;
  amount: number;
  dueDate: Date;
};

type CanDriveWorkInStarshipArgs = {
  driveId: string;
  startShipId: string;
};

type hasNecessaryPartsArgs = {
  driveId: string;
  amount: number;
};

type CanBuildByArgs = {
  driveId: string;
  amount: number;
  dueDate: Date;
};

class WarpDriveFactory {

  constructor() {}

  canBuild(args: CanBuildArgs): boolean {
    if (!this.canDriveWorkInStarship({ driveId: args.driveId, startShipId: args.starShipId })) {
      return false;
    }

    if (!this.hasNecessaryParts({ driveId: args.driveId, amount: args.amount })) {
      return false;
    }

    if (!this.canBuildBy({ driveId: args.driveId, amount: args.amount, dueDate: args.dueDate })) {
      return false;
    }
  
    return true;
  }

  canDriveWorkInStarship(args: CanDriveWorkInStarshipArgs): boolean {
    return new Date().getTime() % 2 === 0;
  }

  hasNecessaryParts(args: hasNecessaryPartsArgs): boolean {
    return new Date().getTime() % 2 === 0;
  }

  canBuildBy(args: CanBuildByArgs): boolean {
    return new Date().getTime() % 2 === 0;
  }
}
