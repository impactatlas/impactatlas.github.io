#!/bin/bash
echo "###################################"
echo "######### Auto Deployment #########"
echo "###################################"

# Variables
TARGETDIR=/home/amplifier1/impactatlas.org
BACKUPDIR=/home/amplifier1/backups

#extracting the site name as a variable, reverse before and after cut. 
#This is especially handy when parsing paths that could contain (or not) a finishing / character.
SITENAME=`echo $TARGETDIR | rev | cut -d/ -f1 | rev`
echo "Running post-receive for $SITENAME"

echo "cd $TARGETDIR"
cd $TARGETDIR

#test that the backup directory exists and create it if not. 
mkdir -p $BACKUPDIR/$SITENAME

#removing old backup
echo "Removing old backup data..."
rm -rf $BACKUPDIR/$SITENAME/*

# Zip up what was there before, put it to an archive for emergency purposes
# /var/www/backups/example.YYYYMMMDDHHMMSSz.tgz
time_suffix=`date "+%Y-%m-%d-%H%M%S"`
echo "Backup timestamp $time_suffix"
tar czf $BACKUPDIR/$SITENAME/$SITENAME.$time_suffix.tgz ./*

# Remove the existing data
echo "Remove $TARGETDIR ..."
rm -fr $TARGETDIR/*

# Check out the local copy of the git repo
echo "Check out local copy"
export GIT_WORK_TREE=/home/amplifier1/git/$SITENAME
export GIT_DIR=/home/amplifier1/git/$SITENAME/.git
cd $GIT_WORK_TREE
git checkout -f


# Copy everything from source downwards to the above directory (so there's no src dir in the target)
echo "Copying to $TARGETDIR"
cp -r /home/amplifier1/git/$SITENAME/dist/* $TARGETDIR
echo "###################################"
echo "###################################"