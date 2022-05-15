import { PersistentUnorderedMap, context, u128 } from "near-sdk-as"
import { AccountId } from '../../utils';

@nearBindgen

export class Activity {
  _participants: string[];
  _moderator: AccountId;
  _pCount: number;
  _activityFee: u128;
  _actDate: Date;
  _actLocation: string;


  constructor(participants:string[], moderator: AccountId, pCount: number, activityFee: u128, actDate: Date, actLocation: string) {
    this._participants = participants;
    this._moderator = moderator;
    this._pCount = pCount;
    this._activityFee = activityFee;
    this._actDate = actDate;
    this._actLocation = actLocation;
  }
}

@nearBindgen
export class ContributionTracker {
  public count: u32 = 0;
  public total: u128 = u128.Zero;
  public average: f64;
  public received: u128 = u128.Zero
  public transferred: u128 = u128.Zero

  update(value: u128): void {
    // track money received separately
    this.received = u128.add(this.received, value);

    // update tracking data
    this.count += 1;
    this.total = u128.add(this.total, value);
    this.average = u128.div(this.total, u128.from(this.count)).toF64();
  }

  record_transfer(): void {
    this.transferred = u128.add(this.transferred, this.received)
    this.received = u128.Zero
  }
}

export const activities = new PersistentUnorderedMap<string, Activity>('A');