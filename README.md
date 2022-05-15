# Activity Planner With People

- This dApp provides to planning an activity with people at network. Activity moderator pays 1 NEAR for creating an activity. Moderator can add or remove people to the activity. Future plans for this app includes people can see the Activies and they can send a join request, rate the activities and they can donate to the moderators.  

## Requirements

Activity Planner is a smart contract running on NEAR. We should install *near-cli* to use.

- Install yarn.
```
yarn
```

- Install near-cli
```
npm install --global near-cli
```

## Build - Deploy

- First, we need to **login.**
```
near login
```

- **Build** to the contract.
```
yarn build:release
```

- **Deploy** to the conract.
```
yarn deploy
```

- Copy **dev-123-456** from the _neardev/dev-account_ folder.
```
export CONTRACT=<your_dev_id>
```

## How to Use

*Firstly you have to set all information for create a activity*

- **Adding** people to your activity.
```
near call $CONTRACT addParticipant <example.testnet>
```

- **Removing** people from your activity.
```
near call $CONTRACT deleteParticipant
```

- to set meeting **date** use this command
```
near view $CONTRACT setActivityDate
```

- to set meeting **Location** use this command
```
near view $CONTRACT setActivityLocation
```

- to set meeting **Location** use this command
```
near view $CONTRACT setActivityLocation
```

### Now you can create your Activity

- Use this command for create your activity
```
near view $CONTRACT createActivity --accountId --amount 1 
```

### Show all participants
```
near call $CONTRACT showParticipants
```