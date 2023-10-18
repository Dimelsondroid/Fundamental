// ==UserScript==
// @name         Fundamental v.0.1.7
// @version      1.2.4
// @description  Automation for most parts of the game before you get in-game automations, tested up to and including Void.
// @downloadURL  https://github.com/Dimelsondroid/Fundamental/raw/main/Fundamental.user.js
// @updateURL    https://github.com/Dimelsondroid/Fundamental/raw/main/Fundamental.user.js
// @author       Dimelsondroid
// @match        https://awwhy.github.io/Fundamental*
// ==/UserScript==

//Setting up Buttons\Inputs
var auto_btn_style = 'color: white; font-size: 16px;';

let myAutoArea = document.createElement('section');
myAutoArea.id = "automationArea";
myAutoArea.setAttribute("aria-label", "Automation");
document.querySelector("#footerMain").appendChild(myAutoArea);

var enableAllBtn = document.createElement('button');
enableAllBtn.id = "enableAll";
enableAllBtn.style.cssText = auto_btn_style;
enableAllBtn.type = 'button';
enableAllBtn.innerText = 'Enable script';
enableAllBtn.title = 'Enable/Disable whole script';
enableAllBtn.style.background = "#550000";
enableAllBtn.onclick = () => {
    enableAll = !enableAll
    if (enableAll) {
        enableAllBtn.style.background = '#005500';
        enableAllBtn.innerText = 'Script enabled';
    } else {
        enableAllBtn.style.background = "#550000";
        enableAllBtn.innerText = 'Script disabled';
    }};

var enableBuildingsBuyBtn = document.createElement('button');
enableBuildingsBuyBtn.id = "enableBuildingsBuy";
enableBuildingsBuyBtn.style.cssText = auto_btn_style;
enableBuildingsBuyBtn.type = 'button';
enableBuildingsBuyBtn.innerText = 'Buy buildings';
enableBuildingsBuyBtn.title = 'Buy unautomated buildings';
enableBuildingsBuyBtn.style.background = "#550000";
enableBuildingsBuyBtn.onclick = () => {
    enableBuildingsBuy = !enableBuildingsBuy
    if (enableBuildingsBuy) {
        enableBuildingsBuyBtn.style.background = "#005500";
        enableBuildingsBuyBtn.innerText = 'Buying buildings';
    } else {
        enableBuildingsBuyBtn.style.background = "#550000";
        enableBuildingsBuyBtn.innerText = "Not buying buildings";
    }};

var enableUpgradesBtn = document.createElement('button');
enableUpgradesBtn.id = "enableUpgrades";
enableUpgradesBtn.style.cssText = auto_btn_style;
enableUpgradesBtn.type = 'button';
enableUpgradesBtn.innerText = 'Buy enchancements';
enableUpgradesBtn.title = 'Autobuy unautomated upgrades/researches/elements on currently active stage';
enableUpgradesBtn.style.background = "#550000";
enableUpgradesBtn.onclick = () => {
    enableUpgrades = !enableUpgrades
    if (enableUpgrades) {
        enableUpgradesBtn.style.background = "#005500";
        enableUpgradesBtn.innerText = 'Buying all enchancements';
    } else {
        enableUpgradesBtn.style.background = "#550000";
        enableUpgradesBtn.innerText = "Not buying enchancements";
    }};

var doVacuumCycleBtn = document.createElement('button');
doVacuumCycleBtn.id = "doVacuumCycle";
doVacuumCycleBtn.style.cssText = auto_btn_style;
doVacuumCycleBtn.type = 'button';
doVacuumCycleBtn.innerText = 'Cycle';
doVacuumCycleBtn.title = 'For cycling through stages in Vacuum';
doVacuumCycleBtn.style.background = "#550000";
doVacuumCycleBtn.onclick = () => {
    doVacuumCycle = !doVacuumCycle
    if (doVacuumCycle) {
        doVacuumCycleBtn.style.background = "#005500";
        doVacuumCycleBtn.innerText = 'Cycling';
    } else {
        doVacuumCycleBtn.style.background = "#550000";
        doVacuumCycleBtn.innerText = 'Not cycling';
    }};

var cycleStepInput = document.createElement('input');
cycleStepInput.id = "cycleStep";
cycleStepInput.style.cssText = auto_btn_style;
cycleStepInput.type = 'number';
cycleStepInput.title = 'Cycle step duration per discovered stage';
cycleStepInput.value = 5000;

var saveMassBtn = document.createElement('button');
saveMassBtn.id = "saveMass";
saveMassBtn.style.cssText = auto_btn_style;
saveMassBtn.type = 'button';
saveMassBtn.innerText = 'Save mass';
saveMassBtn.title = 'Disable mass consuming buildings on some conditions';
saveMassBtn.style.background = "#550000";
saveMassBtn.onclick = () => {
    saveMass = !saveMass
    if (saveMass) {
        saveMassBtn.style.background = "#005500";
        saveMassBtn.innerText = 'Saving mass';
    } else {
        saveMassBtn.style.background = "#550000";
        saveMassBtn.innerText = 'Not saving mass';
    }};

var cloudGoalInput = document.createElement('input');
cloudGoalInput.id = "cloudGoal";
cloudGoalInput.style.cssText = auto_btn_style;
cloudGoalInput.type = 'number';
cloudGoalInput.title = 'Set it at 0 before reaching Vacuum. Cloud goal before starting Collapses, also goal for Stage resets';
cloudGoalInput.value = 0;

var cloudMultiplierInput = document.createElement('input');
cloudMultiplierInput.id = "cloudMultiplierInput";
cloudMultiplierInput.style.cssText = auto_btn_style;
cloudMultiplierInput.type = 'number';
cloudMultiplierInput.title = 'Cloud goal multiplier for Vaporization';
cloudMultiplierInput.value = 2;

var startCloudSaveupDividerInput = document.createElement('input');
startCloudSaveupDividerInput.id = "cloudSaveupDividerInput";
startCloudSaveupDividerInput.style.cssText = auto_btn_style;
startCloudSaveupDividerInput.type = 'number';
startCloudSaveupDividerInput.title = 'A divider based on current Clouds on when to start Saving Drops for Vaporization. "1.5" means that Submerged buying will be turned off at 2/3 of current Clouds';
startCloudSaveupDividerInput.value = 1.5;

var stageResetBtn = document.createElement('button');
stageResetBtn.id = "stageReset";
stageResetBtn.style.cssText = auto_btn_style;
stageResetBtn.type = 'button';
stageResetBtn.innerText = 'Auto stage reset';
stageResetBtn.title = 'Enable/disable automatic stage resets'
stageResetBtn.style.background = "#550000";
stageResetBtn.onclick = () => {
    stageResetEnable = !stageResetEnable
    if (stageResetEnable) {
        stageResetBtn.style.background = "#005500";
        while (!document.querySelector('#toggleConfirm0').innerText.includes('None')) {
                document.querySelector('#toggleConfirm0').click();
        };
        stageResetBtn.innerText = 'Stage reset enabled, confirm disabled';
        stageResetBtn.style.height = '40px'
    } else {
        stageResetBtn.style.background = "#550000";
        while (!document.querySelector('#toggleConfirm0').innerText.includes('All')) {
                document.querySelector('#toggleConfirm0').click();
        };
        stageResetBtn.innerText = 'Stage reset disabled, confirm enabled';
        stageResetBtn.style.height = '40px'
    }};

var interstellarMassResetInput = document.createElement('input');
interstellarMassResetInput.id = "interstellarMassResetInput";
interstellarMassResetInput.style.cssText = auto_btn_style;
interstellarMassResetInput.type = 'number';
interstellarMassResetInput.title = 'Multiplier to current Mass for pre-Vacuum Collapses';
interstellarMassResetInput.value = 1.5;

var togglesSwitchBtn = document.createElement('button');
togglesSwitchBtn.id = "togglesSwitch";
togglesSwitchBtn.className = "user";
togglesSwitchBtn.style.cssText = auto_btn_style;
togglesSwitchBtn.type = 'button';
togglesSwitchBtn.innerText = 'Inner resets confirmations';
togglesSwitchBtn.title = 'Switch "All/None" all inner resets confirmations'
togglesSwitchBtn.style.background = "#550000";
togglesSwitchBtn.onclick = () => {
    innerResetsEnabled = !innerResetsEnabled
    if (innerResetsEnabled) {
        togglesSwitchBtn.style.background = "#005500";
        switchInnerResetToggles();
        togglesSwitchBtn.innerText = 'Inner confirmations enabled';
    } else {
        togglesSwitchBtn.style.background = "#550000";
        switchInnerResetToggles();
        togglesSwitchBtn.innerText = 'Inner confirmations disabled';
    }};

myAutoArea.appendChild(enableAllBtn);
myAutoArea.appendChild(enableBuildingsBuyBtn);
myAutoArea.appendChild(enableUpgradesBtn);
myAutoArea.appendChild(doVacuumCycleBtn);
myAutoArea.appendChild(cycleStepInput);
myAutoArea.appendChild(saveMassBtn);
myAutoArea.appendChild(cloudGoalInput);
myAutoArea.appendChild(cloudMultiplierInput);
myAutoArea.appendChild(startCloudSaveupDividerInput);
myAutoArea.appendChild(stageResetBtn);
myAutoArea.appendChild(interstellarMassResetInput);
myAutoArea.appendChild(togglesSwitchBtn);

//Automation variables
var toggleCheck = [];

var unlockedStageButtons = document.querySelectorAll('[id*="Switch"]:not(.stageText):not([style="display: none;"])')
var enableAll = false // enable or disable whole script, button manageable
var enableBuildingsBuy = false // turn auto building, button manageable
var enableUpgrades = false // turn auto for upgrades\researches\elements, button manageable
var saveMass = false // Turn off Mass-consuming building to reach Collapse faster
var stageResetEnable = false // Additional condition for auto-stage resets, in case you want it longer, button manageable.
var innerResetsEnabled = false
var gameStage = 0

//Micro
var maxEnergy = 0 // do not change
var microEnergyCount = 0 // do not change
var energyCheckLoopStart = 0 // do not change
var preonLimit = 10000 // Vacuum part for turning off auto for preons to accumulate mass, make it more to delay turning off
var doMicroReset = true // for turning on/off auto Discharge

//Submerged
var doSubmergedReset = true // for turning on/off auto Vaporization
    //pre-Vacuum
var submergedCloudMultyLow = 9 // multy for Clouds under 100000
var submergedCloudMultyMid = 9 // multy for Clouds under 1e10
var submergedCloudMultyHigh = 9 // multy for Clouds over 1e10
    //Vacuum
var maxClouds = 1 // do not change
// cloudMultiplier = 2 // '1' is doubling current Clouds (get same amount as now), probably slower than with bigger multi but gives you some auto 'Cloud progress' before Collapsing. Tune it for you own style.
// startCloudSaveupDivider = 1.5 // should be over 1, the bigger it is - the sooner all buying in Submerged will be turned off, keep in mind that less buildings will be bought to produce Drops and speed up accumulation of Clouds
// these 2 are somewhat connected, the bigger 'startCloudSaveupDivider' you have the longer it might take to reach 'cloudMultiplier' to do Vaporization.

//Accretion
var accretionLimit = 5 // Vacuum part for turning off all accretion to save mass, make it more to delay turning off
var doAccretionReset = true // for turning on/off auto Rankup

//Interstellar
//var interstellarMassReset = 1.5 // multy for auto Mass reset, for pre-Vacuum auto-Collapse
var vacuumInterstellarMassReset = 1.1 // minimal diff of reset to current Mass for Collapse, just a safe option, might delay Collapsing at some moments, should reset at Interstellar mass hardcap
var doInterstellarReset = true // for turning on/off auto Collapse

// Vacuum
var doVacuumCycle = false //
var cycleStep = 5000 // internal variable, actual step is managed with input field in footer.
// Better don't set it lower than 1500-2000 or it might break the cycle. Also keep in mind that it will be hard to turn it off if it cycles too fast.
var vacuumCycleReset = 0 // additional option to turn off cycling in case you duckedup with some cycle settings.
// Type 'cycleReset = 1' in console, it's value will automatically return to 0 after stopping cycle.
// Should be easier to manage with buttons\inputs now.
let vacuumCycleInterval = 20000 // do not change, needed for first cycle after applying script

//--- end of variables

hideShowBtnsInputs()

//As you might guess it is for cycling through stages in Vacuum to get data and do some job while you are away
var vacuumCycle = setInterval(function() {
    if (doVacuumCycle && enableAll) {
        vacuumCycleFunc();
    };
}, vacuumCycleInterval);

var buyAll = setInterval(function(){
    toggleCheck = [enableAll, enableBuildingsBuy, enableUpgrades, doVacuumCycle];
    hideShowBtnsInputs();
    if (enableAll) {
//Only used for microworld reset checks if auto is not bought yet, also there's another check inside the microworld function.
        try {
            if (parseFloat(document.getElementById('strange4Stage1Level').innerText) == 0 && document.getElementById('reset1Text').innerText.includes('Discharge')) {
                energyCheckLoopStart = parseFloat(document.getElementById('footerStat2Span').innerText);
            }
        } catch(err) {};

//auto Upgrades, Research and Elements
        if (enableUpgrades) {
            buyableEnchancements();
        };

//bump first building after some resets
        if (parseFloat(document.getElementById('building1Cur').innerText) == 0 && enableBuildingsBuy) {
            document.getElementById('building1Btn').click();
        };

//world dependant functions
        if (document.getElementById('currentSwitch').innerText.includes('Microworld') &&
            (document.getElementById('stageTabBtn').classList.contains('tabActive') || document.getElementById('researchTabBtn').classList.contains('tabActive'))) {
            microworldBuyReset();
        };

        if (document.getElementById('currentSwitch').innerText.includes('Submerged') &&
            (document.getElementById('stageTabBtn').classList.contains('tabActive') || document.getElementById('researchTabBtn').classList.contains('tabActive'))) {
            submergedBuyReset();
        };

        if (document.getElementById('currentSwitch').innerText.includes('Accretion') &&
            (document.getElementById('stageTabBtn').classList.contains('tabActive') || document.getElementById('researchTabBtn').classList.contains('tabActive'))) {
            accretionBuyReset();
        };

        if ((document.getElementById('currentSwitch').innerText.includes('Interstellar') || document.getElementById('currentSwitch').innerText.includes('Intergalactic')) &&
            (document.getElementById('stageTabBtn').classList.contains('tabActive') || document.getElementById('researchTabBtn').classList.contains('tabActive'))) {
            interstellarBuyReset();
        };

//Auto-Stage reset, mostly Vacuum
        if (document.getElementById('stageWord').innerText.includes('Intergalactic') && maxClouds > cloudGoalInput.value &&
            document.getElementById('stageReset').innerText.includes('Return back to start') && stageResetEnable &&
            parseFloat(document.getElementById('strange3Stage5Level').innerText) == 0) {
            document.getElementById('stageReset').click();
            restoreToggles();
            maxClouds = 1;
        };
//Auto-Stage reset, pre-Vacuum
        if ((!document.getElementById('challengeMultiline').innerText.includes('Vacuum state: true') ||
            !document.getElementById('challengeMultiline').innerText.includes('Void, active')) &&
            document.getElementById('stageReset').innerText.includes('Enter next Stage') && stageResetEnable &&
            parseFloat(document.getElementById('strange3Stage5Level').innerText) == 0) {
            document.getElementById('stageReset').click();
            restoreToggles();
            maxClouds = 1;
            };

//Check if Buy 1 is active and switch to it if necessary, looks convenient to me and helps buy buildings
//Comment this "if" if not needed. Currently input field used to manupulate script toggle statuses (description is in the beginning)
        if (document.querySelectorAll('[id$="buy1x"]:not([style*="green"])').length == 1) {
            document.getElementById('buy1x').click();
        };

    };
}, 50);

//Vacuum cycle body, switches every 5 sec (or now much you set with 'cycleStep' variable) between available stages, summary delay is dynamic, depending on amount of stages unlocked.
function vacuumCycleFunc () {
        if (vacuumCycleReset == 1) {
            vacuumCycleReset = 0;
            cycleStepInput.value = 5000;
            if (doVacuumCycle) {doVacuumCycleBtn.click()};
        };
        if(!document.getElementById('stageSelect').classList.contains('active')) {document.querySelector('#currentSwitch').click()}
        cycleStep = cycleStepInput.value;
        var cycle = 0;
        unlockedStageButtons = document.querySelectorAll('[id*="Switch"]:not(.stageText):not(.user):not([style="display: none;"])')
        unlockedStageButtons.forEach(stage => {
            setTimeout (function() {
                if (doVacuumCycle && enableAll) {stage.click()};
            }, cycleStep*cycle);
            setTimeout (function() {
                if (doVacuumCycle && enableAll) {document.getElementById('settingsTabBtn').click()};
            }, cycleStep*cycle+cycleStep/3);
            setTimeout (function() {
                if (doVacuumCycle && enableAll) {document.getElementById('settingsSubtabBtnStats').click()};
            }, cycleStep*cycle+cycleStep/3+100);
            setTimeout (function() {
                if (doVacuumCycle && enableAll) {document.getElementById('stageTabBtn').click()};
            }, cycleStep*cycle+cycleStep/3+500);
            cycle += 1;
        });

        clearInterval(vacuumCycle);
        vacuumCycleInterval = cycleStep*unlockedStageButtons.length + 1000;

        vacuumCycle = setInterval(function() {
            if (doVacuumCycle && enableAll) {
                vacuumCycleFunc();
            }
        }, vacuumCycleInterval);
};

function buyableEnchancements() {
//auto Upgrades, Research and Elements
//works dumb, simply trying to buy anything first available
//checks if you already have automations included
    if (parseFloat(document.getElementById('strange7Stage3Level').innerText) < 3) {
        var allUpgrades = document.getElementById('upgrades').querySelectorAll('.interactiveImage:not([tabindex="-1"])');
        allUpgrades.forEach(upgrade => {
            upgrade.click();
        });

        var allResearch = document.getElementById('researchSubtabResearches').querySelectorAll('.interactiveImage:not([tabindex="-1"])');
        allResearch.forEach(research => {
            research.click();
        });
    };

    if (parseFloat(document.getElementById('strange5Stage4Level').innerText) == 0) {
        if (document.getElementById('stageWord').innerText.includes('Interstellar') ||
            document.getElementById('stageWord').innerText.includes('Intergalactic')) {
            var allElements = document.getElementById('researchSubtabElements').querySelectorAll('.interactiveImage:not([tabindex="-1"])');
            allElements.forEach(element => {
                element.click();
            });
        };
    };
};

function microworldBuyReset() {
//Manage building in microworld
    if (enableBuildingsBuy && parseFloat(document.getElementById('strange7Stage1Level').innerText) != 3) {
        if (parseFloat(document.getElementById('strange8Stage1Level').innerText) != 0) {
            buildingAutoWait = parseInt(document.getElementById('autoWaitInput').value);
        } else {
            buildingAutoWait = 2;
        };
        allBuildings = document.getElementById('buildings').querySelectorAll('.buyBuilding.availableBuilding')
        allBuildings.forEach(building => {
            currentCash = parseFloat(document.getElementById('footerStat1Span').innerText);
            currentBuildingCost = parseFloat(building.querySelector('button').innerText.split(' ')[1]);
            buildingId = parseInt(building.id.split('building')[1]);
            if (!saveMass && building.innerText.includes('Auto OFF')) {
                document.getElementById('toggleBuilding'+buildingId).click();
            };
            if (building.innerText.includes('Auto ON') ||  building.innerText.includes('Auto OFF')) {return};
            if (parseFloat(document.getElementById('building'+buildingId+'Cur').innerText) <= 5) {
                building.querySelector('button').click();
            };
            if (buildingId == 1) {
                if (currentCash >= currentBuildingCost*buildingAutoWait) {
                    building.querySelector('button').click();
                };
            } else {
                prevBuildingAmount = parseFloat(document.getElementById('building'+(buildingId-1)+'Cur').innerText)
                if (prevBuildingAmount >= currentBuildingCost*buildingAutoWait) {
                    building.querySelector('button').click();
                };
            };
        });
    };

//Vacuum part, check if cap reached to turn off preons
    if ((document.getElementById('challengeMultiline').innerText.includes('Vacuum state: true') ||
        document.getElementById('challengeMultiline').innerText.includes('Void, active')) &&
        parseFloat(document.getElementById('strange11Stage1Level').innerText) == 0) {
        if (parseFloat(document.getElementById('preonCapTill').innerText) >= preonLimit &&
            document.getElementById('toggleBuilding1').innerText.includes('Auto ON') &&
            saveMass && maxClouds >= cloudGoalInput.value &&
            (document.getElementById('stageWord').innerText.includes('Interstellar') || document.getElementById('stageWord').innerText.includes('Intergalactic')) &&
            parseFloat(document.getElementById('footerStat2Span').innerText) > 100000) {
            document.getElementById('toggleBuilding1').click();
        } else if (document.getElementById('toggleBuilding1').innerText.includes('Auto OFF') &&
            (!saveMass || parseFloat(document.getElementById('preonCapTill').innerText) < preonLimit)) {
            document.getElementById('toggleBuilding1').click();
        };
    };

//Manage resets if you don't have Auto
    if (parseFloat(document.getElementById('strange4Stage1Level').innerText) == 0 &&
        doMicroReset &&
        document.getElementById('stageTabBtn').classList.contains('tabActive') &&
        document.getElementById('currentSwitch').innerText.includes('Microworld')) {
        if (maxEnergy < parseFloat(document.getElementById('footerStat2Span').innerText) &&
            document.getElementById('footerStat2Name').innerText.includes('Energy')) {
            maxEnergy = parseFloat(document.getElementById('footerStat2Span').innerText);
        };
        if (energyCheckLoopStart > parseFloat(document.getElementById('footerStat2Span').innerText) ||
            parseFloat(document.getElementById('footerStat2Span').innerText) < maxEnergy) { // check if something was bought to do reset
                microEnergyCount += 1;
        };
        dischargeGoal = parseFloat(document.getElementById('reset1Button').innerText.split(' ')[3])
        currentEnergy = parseFloat(document.getElementById('footerStat2Span').innerText)
        if (dischargeGoal <= currentEnergy) {
            document.getElementById('reset1Button').click();
            microEnergyCount = 0;
            maxEnergy = 0;
            restoreToggles();
        } else if (dischargeGoal > currentEnergy && microEnergyCount >= 1) {
            document.getElementById('reset1Button').click();
            microEnergyCount = 0;
            maxEnergy = 0;
            restoreToggles();
        };
    };
};

function submergedBuyReset() {
//Manage building in Submerged
    if (enableBuildingsBuy && parseFloat(document.getElementById('strange6Stage2Level').innerText) != 5) {
        if (parseFloat(document.getElementById('strange8Stage1Level').innerText) != 0) {
            buildingAutoWait = parseInt(document.getElementById('autoWaitInput').value);
        } else {
            buildingAutoWait = 2;
        };
        allBuildings = document.getElementById('buildings').querySelectorAll('.buyBuilding.availableBuilding')
        allBuildings.forEach(building => {
            currentMoles = parseFloat(document.getElementById('footerStat2Span').innerText);
            currentDrops = parseFloat(document.getElementById('footerStat3Span').innerText);
            currentBuildingCost = parseFloat(building.querySelector('button').innerText.split(' ')[1]);
            buildingId = parseInt(building.id.split('building')[1]);
            if (!saveMass && building.innerText.includes('Auto OFF')) {
                document.getElementById('toggleBuilding'+buildingId).click();
            };
            if (building.innerText.includes('Auto ON') || building.innerText.includes('Auto OFF')) {return};
            if (parseFloat(document.getElementById('building'+buildingId+'Cur').innerText) <= 5) {
                building.querySelector('button').click();
            };
            if (building.childNodes[3].innerText.includes('Drops')) {
                if (currentMoles >= currentBuildingCost*buildingAutoWait) {
                    building.querySelector('button').click();
                };
            } else {
                if (currentDrops >= currentBuildingCost*buildingAutoWait) {
                    building.querySelector('button').click();
                };
            };
        });
        if (parseFloat(document.getElementById('footerStat3Span').innerText) < 100 &&
            document.getElementById('toggleBuilding0').innerText.includes('All OFF')) {
            document.getElementById('toggleBuilding0').click();
        };
    };

    if (maxClouds < parseFloat(document.getElementById('footerStat1Span').innerText) &&
        document.getElementById('footerStat1Name').innerText.includes('Clouds')) {
        maxClouds = parseFloat(document.getElementById('footerStat1Span').innerText);
    };

    if (maxClouds < cloudGoalInput.value &&
        (document.getElementById('stageWord').innerText.includes('Interstellar') || document.getElementById('stageWord').innerText.includes('Intergalactic')) &&
        document.getElementById('reset1Button').innerText.includes('Clouds') &&
        parseFloat(document.getElementById('reset1Button').innerText.split(' ')[2]) >= maxClouds/startCloudSaveupDividerInput.value &&
        (document.getElementById('challengeMultiline').innerText.includes('Vacuum state: true') || document.getElementById('challengeMultiline').innerText.includes('Void, active'))) {
        if (enableBuildingsBuy) {enableBuildingsBuyBtn.click()};
        if (enableUpgrades) {enableUpgradesBtn.click()};
        if (document.getElementById('toggleBuilding0').innerText.includes('All ON')) {
            document.getElementById('toggleBuilding0').click();
        };
    };

//Manage cloud resets if you don't have Auto
    if (parseFloat(document.getElementById('strange5Stage2Level').innerText) == 0 &&
        doSubmergedReset &&
        document.getElementById('stageTabBtn').classList.contains('tabActive') &&
        document.getElementById('currentSwitch').innerText.includes('Submerged')) {
        cloudResetFor = 0;
        currentCloud = 1;
        if (document.getElementById('reset1Button').innerText.includes('Clouds')) {
            cloudResetFor = parseFloat(document.getElementById('reset1Button').innerText.split(' ')[2]);
        };
        if (parseFloat(document.getElementById('footerStat1Span').innerText) > 0 &&
            document.getElementById('footerStat1Name').innerText.includes('Clouds')) {
            currentCloud = parseFloat(document.getElementById('footerStat1Span').innerText);
        };
        if (document.getElementById('challengeMultiline').innerText.includes('Vacuum state: true') ||
            document.getElementById('challengeMultiline').innerText.includes('Void, active')) {
            if (cloudResetFor >= currentCloud*cloudMultiplierInput.value || cloudResetFor > cloudGoalInput.value) {
                document.getElementById('reset1Button').click();
                if (document.getElementById('toggleBuilding0').innerText.includes('All OFF')) {
                    document.getElementById('toggleBuilding0').click();
                };
                restoreToggles();
            };
        } else {
            if (cloudResetFor >= currentCloud*cloudMultiplierInput.value) {
                document.getElementById('reset1Button').click();
                restoreToggles();
            };
        };

//Added auto-input for Auto-Vap, depending on Cloud amount, works ugly if works at all, better input manually as intended
    } else if (parseFloat(document.getElementById('footerStat1Span').innerText) < 100000 &&
        parseFloat(document.getElementById('vaporizationInput').value) != submergedCloudMultyLow) {
        document.getElementById('vaporizationInput').value = submergedCloudMultyLow;
    } else if (parseFloat(document.getElementById('footerStat1Span').innerText) >= 100000 &&
        parseFloat(document.getElementById('footerStat1Span').innerText) < 1e10 &&
        parseFloat(document.getElementById('vaporizationInput').value) != submergedCloudMultyMid) {
        document.getElementById('vaporizationInput').value = submergedCloudMultyMid;
    } else if (parseFloat(document.getElementById('footerStat1Span').innerText) >= 1e10 &&
        parseFloat(document.getElementById('vaporizationInput').value) != submergedCloudMultyHigh) {
        document.getElementById('vaporizationInput').value = submergedCloudMultyHigh;
    };
};

function accretionBuyReset() {
//Manage building in Accretion
    if (enableBuildingsBuy && parseFloat(document.getElementById('strange6Stage3Level').innerText) != 4) {
        if (parseFloat(document.getElementById('strange8Stage1Level').innerText) != 0) {
            buildingAutoWait = parseInt(document.getElementById('autoWaitInput').value);
        } else {
            buildingAutoWait = 2;
        };
        allBuildings = document.getElementById('buildings').querySelectorAll('.buyBuilding.availableBuilding')
        allBuildings.forEach(building => {
            currentMass = parseFloat(document.getElementById('footerStat1Span').innerText);
            currentBuildingCost = parseFloat(building.querySelector('button').innerText.split(' ')[1]);
            buildingId = parseInt(building.id.split('building')[1]);
            if (!saveMass && building.innerText.includes('Auto OFF')) {
                document.getElementById('toggleBuilding'+buildingId).click();
            };
            if (building.innerText.includes('Auto ON') || building.innerText.includes('Auto OFF')) {return};
            if (parseFloat(document.getElementById('building'+buildingId+'Cur').innerText) <= 5) {
                building.querySelector('button').click();
            };
            if (currentMass >= currentBuildingCost*buildingAutoWait) {
                building.querySelector('button').click();
            };
        });
    };

//Vacuum part, check if cap reached to turn off all automation in Accretion
    if (document.getElementById('challengeMultiline').innerText.includes('Vacuum state: true') ||
        document.getElementById('challengeMultiline').innerText.includes('Void, active')) {
        if (parseFloat(document.getElementById('strange8Stage1Level').innerText) == 0) {
            allBuildingToggles = document.getElementById('buildings').querySelectorAll('[id*="toggleBuilding"]:not([style*="none"])');
            allBuildingToggles.forEach(toggle => {
                if (saveMass && toggle.innerText.includes('Auto ON') &&
                    parseFloat(document.getElementById('building1Prod').innerText) >= parseFloat(document.getElementById('dustCapStat').innerText)*accretionLimit &&
                    (document.getElementById('stageWord').innerText.includes('Interstellar') || document.getElementById('stageWord').innerText.includes('Intergalactic'))) {
                    toggle.click();
                } else if (!saveMass && toggle.innerText.includes('Auto OFF') &&
                    (document.getElementById('stageWord').innerText.includes('Interstellar') || document.getElementById('stageWord').innerText.includes('Intergalactic'))) {
                    toggle.click();
                } else if (saveMass && toggle.innerText.includes('Auto OFF') &&
                    parseFloat(document.getElementById('building1Prod').innerText) < parseFloat(document.getElementById('dustCapStat').innerText)*accretionLimit &&
                    (document.getElementById('stageWord').innerText.includes('Interstellar') || document.getElementById('stageWord').innerText.includes('Intergalactic'))) {
                    toggle.click();
                };
            });
        } else {
            if (parseFloat(document.getElementById('dustCapTill').innerText) >= accretionLimit &&
                document.getElementById('toggleBuilding0').innerText.includes('All ON') && saveMass &&
                maxClouds >= cloudGoalInput.value &&
                (document.getElementById('stageWord').innerText.includes('Interstellar') || document.getElementById('stageWord').innerText.includes('Intergalactic'))) {
                document.getElementById('toggleBuilding0').click();
            } else if (document.getElementById('toggleBuilding0').innerText.includes('All OFF') && (!saveMass ||
                    parseFloat(document.getElementById('dustCapTill').innerText) < accretionLimit)) {
                document.getElementById('toggleBuilding0').click();
            };
        };
    };

//Manage resets if you don't have Auto
    if (parseFloat(document.getElementById('strange5Stage3Level').innerText) == 0 &&
        doAccretionReset &&
        document.getElementById('stageTabBtn').classList.contains('tabActive') &&
        document.getElementById('currentSwitch').innerText.includes('Accretion')) {
        massToReset = parseFloat(document.getElementById('reset1Button').innerText.split(' ')[3]);
        currentMass = parseFloat(document.getElementById('footerStat1Span').innerText);
        if (massToReset*1.1 < currentMass) {
            document.getElementById('reset1Button').click();
            restoreToggles();
        };
    };
};

function interstellarBuyReset() {
//Manage building in Interstellar and Intergalactic
    if (enableBuildingsBuy && parseFloat(document.getElementById('strange7Stage4Level').innerText) != 4) {
        if (parseFloat(document.getElementById('strange8Stage1Level').innerText) != 0) {
            buildingAutoWait = parseInt(document.getElementById('autoWaitInput').value);
        } else {
            buildingAutoWait = 2;
        };
        allBuildings = document.getElementById('buildings').querySelectorAll('.buyBuilding.availableBuilding');
        allBuildings.forEach(building => {
            currentElements = parseFloat(document.getElementById('footerStat2Span').innerText);
            currentBuildingCost = parseFloat(building.querySelector('button').innerText.split(' ')[1]);
            buildingId = parseInt(building.id.split('building')[1]);
            if (!saveMass && building.innerText.includes('Auto OFF')) {
                document.getElementById('toggleBuilding'+buildingId).click();
            };
            if (building.innerText.includes('Auto ON') || building.innerText.includes('Auto OFF')) {return};
            if (parseFloat(document.getElementById('building'+buildingId+'Cur').innerText) <= 5) {
                building.querySelector('button').click();
            };
            if (currentElements >= currentBuildingCost*buildingAutoWait) {
                building.querySelector('button').click();
            };
        });
    };
    if (enableBuildingsBuy &&
        document.getElementById('stageWord').innerText.includes('Intergalactic') &&
        !document.getElementById('stageSubtabStructures').innerText.includes('Collapse')) {
        if (parseFloat(document.getElementById('strange8Stage1Level').innerText) != 0) {
            buildingAutoWait = parseInt(document.getElementById('autoWaitInput').value);
        } else {
            buildingAutoWait = 2;
        };
        allBuildings = document.getElementById('buildings').querySelectorAll('.buyBuilding.availableBuilding')
        allBuildings.forEach(building => {
            if (!saveMass && building.innerText.includes('Auto OFF')) {
                document.getElementById('toggleBuilding'+buildingId).click();
            };
            if (building.innerText.includes('Auto ON') || building.innerText.includes('Auto OFF')) {return}
            currentElements = parseFloat(document.getElementById('footerStat2Span').innerText);
            currentBuildingCost = parseFloat(building.querySelector('button').innerText.split(' ')[1]);
            buildingId = parseInt(building.id.split('building')[1]);
            if (parseFloat(document.getElementById('building'+buildingId+'Cur').innerText) <= 5) {
                building.querySelector('button').click();
            };
            if (currentElements >= currentBuildingCost*buildingAutoWait) {
                building.querySelector('button').click();
            };
        });
    };

//Manage resets if you don't have Auto
    if (document.getElementById('challengeMultiline').innerText.includes('Vacuum state: true') ||
        document.getElementById('challengeMultiline').innerText.includes('Void, active')) {
        if (parseFloat(document.getElementById('strange6Stage4Level').innerText) == 0 &&
            doInterstellarReset &&
            document.getElementById('stageTabBtn').classList.contains('tabActive') &&
            maxClouds >= cloudGoalInput.value &&
            (document.getElementById('currentSwitch').innerText.includes('Interstellar') ||
            document.getElementById('currentSwitch').innerText.includes('Intergalactic'))) {
            if (parseFloat(document.getElementById('reset1Button').innerText.split(' ')[2]) >= parseFloat(document.getElementById('mainCapStat').innerText) &&
                parseFloat(document.getElementById('reset1Button').innerText.split(' ')[2]) > parseFloat(document.getElementById('footerStat1Span').innerText) &&
                parseFloat(document.getElementById('reset1Button').innerText.split(' ')[2])/parseFloat(document.getElementById('footerStat1Span').innerText) > interstellarMassResetInput.value) {
                document.getElementById('reset1Button').click();
                restoreToggles();
            };
        };
    } else {
        if (parseFloat(document.getElementById('strange6Stage4Level').innerText) == 0 &&
            doInterstellarReset &&
            document.getElementById('stageTabBtn').classList.contains('tabActive') &&
            (document.getElementById('currentSwitch').innerText.includes('Interstellar') ||
            document.getElementById('currentSwitch').innerText.includes('Intergalactic'))) {
            if (parseFloat(document.getElementById('reset1Button').innerText.split(' ')[2]) > parseFloat(document.getElementById('footerStat1Span').innerText)*interstellarMassResetInput.value ||
                (document.getElementById('researchSubtabElements').querySelectorAll('.interactiveImage.awaiting:not([tabindex="-1"])').length >=2 &&
                parseFloat(document.getElementById('reset1Button').innerText.split(' ')[2]) >= parseFloat(document.getElementById('footerStat1Span').innerText))) {
                document.getElementById('reset1Button').click();
                restoreToggles();
            };
        };
    };
};

function restoreToggles() {
    if (!enableBuildingsBuy) {enableBuildingsBuyBtn.click()};
    if (!enableUpgrades) {enableUpgradesBtn.click()};
    return
};

function hideShowBtnsInputs() {
    if ((document.getElementById('challengeMultiline').innerText.includes('Vacuum state: true') ||
        document.getElementById('challengeMultiline').innerText.includes('Void, active')) && gameStage < 2) {
        if (saveMassBtn.style.display == 'none') {saveMassBtn.style.display = ''};
        if (startCloudSaveupDividerInput.style.display == 'none') {startCloudSaveupDividerInput.style.display = ''};
        if (cloudGoalInput.style.display == 'none') {cloudGoalInput.style.display = ''};
        if (doVacuumCycleBtn.style.display == 'none') {doVacuumCycleBtn.style.display = ''};
        if (cycleStepInput.style.display == 'none') {cycleStepInput.style.display = ''};
        interstellarMassResetInput.title = 'One of safe options for Collapse, should be safe to use 1, might delay Collapses if over 1';
        interstellarMassResetInput.value = 1.05;
        gameStage = 2
    } else if (gameStage < 1) {
        if (saveMassBtn.style.display == '') {saveMassBtn.style.display = 'none'};
        if (startCloudSaveupDividerInput.style.display == '') {startCloudSaveupDividerInput.style.display = 'none'};
        if (cloudGoalInput.style.display == '') {
            cloudGoalInput.style.display = 'none';
            cloudGoalInput.value = 0;
        };
        if (doVacuumCycleBtn.style.display == '') {doVacuumCycleBtn.style.display = 'none'};
        if (cycleStepInput.style.display == '') {cycleStepInput.style.display = 'none'};
        gameStage = 1
    };
};

function switchInnerResetToggles() {
    allResetToggles = document.querySelectorAll('[id*=toggleConfirm]:not([id=toggleConfirm0])');
    allResetToggles.forEach(resetToggle => {
        if (!innerResetsEnabled) {
            while (!resetToggle.innerText.includes('None')) {
                resetToggle.click();
            };
        } else if (innerResetsEnabled) {
            while (!resetToggle.innerText.includes('All')) {
                resetToggle.click();
            };
        };
    });
};