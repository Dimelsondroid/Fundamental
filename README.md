# Fundamental
Automation script for Fundamental 0.1.7

Installation in Tampermonkey:
https://github.com/Dimelsondroid/Fundamental/raw/main/Fundamental.user.js

Current script version - 1.2.3\
Will be updated upon reaching new parts of the game or if I feel something should be changed.

Credits go to awWhy for making this wonderful game and Tobes for helping with code parts :)

For Fundomental v.0.1.7 pre-Vacuum --> Vacuum --> pre-Intergalactic --> Void (with some limitations)

The code is not perfect and do not take all situations into account, expect disappointment on some occasions :)\
Buttons and Inputs have some popup tips. And some are hidden till a point.

Not sure now how it will perform pre-Vacuum as initial pre-Vacuum working code was modified... Currently testing pre-Vacuum on the Fundamental test server.
Also do not know how it will perform when Vacuum Intergalactic is bought, but by that time you should have most automations bought in Strangeness I guess and script might not be needed.

Chrome recommended, as i am playing in it and script is working. F12 to open console in it.
If you are playing on side resources like 'galaxy.click' - after opening console choose any in-game element first (Ctrl+Shift+C in Chrome) or script won't apply.
CTRL+A, CTRL+C all this, CTRL+V to console and Enter then use Buttons\Inputs in footer area.
Do cycle through tabs with data at first, like Strangeness or hardcaps in Settings, so window have the data and script could use it.
Building buyers skip buildings with automation bought.
All new buildings without Auto are prioritized to get until it's 5 of them.
Do not forget to switch off Reset confirmation for stages you want if you don't have automation.

Auto-Stage reset is triggered when cloudGoalInput field value goal is reached as an additional condition to getting Iron element.
There's 'Stage reset' toggle as well.\
**do turn off confirmations before toggling 'Stage reset' button or it might soft-lock the game with popup window till you confirm stage reset or reload the page. Alternatively - set 'stageResetEnable = false' in console**

All script auto-resets are turned on, be aware before committing script to console, look for 'do...Reset' variables to change initial state - true\false.\
Save mass should not be needed pre-Vacuum.

Any ideas on how to improve it are warmly welcomed.