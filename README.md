# Fundamental
Automation script for Fundamental 0.1.7

Installation:
https://github.com/Dimelsondroid/Fundamental/raw/main/Fundamental.user.js

Current script version - 1.1.1

For Fundomental v.0.1.7 Vacuum --> pre-Intergalactic --> Void (with some limitations)

The code might not be perfect and take all situations into account, expect disappointment on some occasions :)

Not sure now how it will perform pre-Vacuum as initial pre-Vacuum working code was modified... Currently testing pre-Vacuum on the Fundamental test server.
Also do not know how it will perform when Vacuum Intergalactic is bought, but by that time you should have most automations bought in Strangeness i guess and script might not be needed.

Chrome recommended, as i am playing in it and script is working. F12 to open console in it.
If you are playing on side resourses like 'galaxy.click' - after opening console choose any in-game element first (Ctrl+Shift+C in Chrome) or script won't apply.
CTRL+A, CTRL+C all this, CTRL+V to console and Enter then use Buttons\Inputs in footer area.
Do cycle through tabs with data at first, like Strangeness or hardcaps in Settings, so window have the data and script could use it.
Building buyers skip buildings with automation bought.
All new buildings without Auto are prioritized to get until it's 5 of them.
Do not forget to switch off Reset confirmation for stages you want if you don't have automation.

Auto-Stage reset is triggered when cloudGoalInput field value goal is reached as an additional condition to getting Iron element.
There's 'Stage reset' toggle as well. 
**Currently implemented only for Vacuum stage of the game and not tested pre-Vacuum**

All script auto-resets are turned on, be aware before commiting script to console, look for 'do...Reset' variables to change initial state - true\false.

Some variables (till 'end of variables' comment) can be changed in console if needed and for personal tuning.