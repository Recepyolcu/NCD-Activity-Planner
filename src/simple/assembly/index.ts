import { context, u128, ContractPromiseBatch, Context, datetime, logging, ContractPromise } from 'near-sdk-as';
import { ONE_NEAR, asNEAR, assert_self, AccountId, XCC_GAS, assert_single_promise_success, Balance, Money } from '../../utils';
import { Activity, activities, ContributionTracker } from './model';


//variables
let participants: string[] = [];
let location: string;
let date: Date;

//this function adds participants
export function addParticipant(participant: string): void{
  participants.push(participant);
}

//This function shows all participants
export function showParticipants(): void{
  for(let i = 0; i < participants.length; i++){
    console.log(i.toString() + " - " + participants[i])
  }
}

//this function removes participants
export function deleteParticipant(participantID: u8): void{
  participants.splice(participantID, 1)
} 

//this function sets activity date
export function setActivityDate(month: i32, day: i32, hour: i32): void{
  date.setUTCMonth(month)
  date.setUTCDate(day)
  date.setUTCHours(hour)
}


//this function sets activity location
export function setActivityLocation(location: string): void{
  location = location;
}

//this function creates Activity by moderator
export function createActivity(): void{

  if(assert(context.attachedDeposit == u128.from(1),"Please deposit exactly 1 NEAR to create a game!")){

    if(participants.length > 0){
      let activity = new Activity(participants, Context.contractName, participants.length ,ONE_NEAR, date,location)
    }
  }
}
