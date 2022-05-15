#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"


echo "For creating an activity you have to add participants, location and date"
echo
echo ---------------------------------------------------------
echo "Use this command for add participant at your activity"
echo ---------------------------------------------------------
echo

near call $CONTRACT addParticipant 


echo
echo ---------------------------------------------------------
echo "Use this command for remove participant from your activity"
echo ---------------------------------------------------------
echo

near call $CONTRACT deleteParticipant


echo
echo ---------------------------------------------------------
echo "Use this command for setting your activity's meeting time"
echo ---------------------------------------------------------
echo

near call $CONTRACT setActivityDate


echo
echo ---------------------------------------------------------
echo "Use this command for setting your activity's meeting location"
echo ---------------------------------------------------------
echo

near call $CONTRACT setActivityLocation


echo
echo ---------------------------------------------------------
echo "Use this command for show your all participants"
echo ---------------------------------------------------------
echo

near call $CONTRACT showParticipants


echo
echo ---------------------------------------------------------
echo "Use this command if you set all of information to create your activity"
echo ---------------------------------------------------------
echo

near call $CONTRACT createActivity



exit 0