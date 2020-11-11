const { data } = require("./data");

const teams = [...new Set(data.map((l) => l.Team))];

// Group by teams
const k = [];
for (let i of teams) {
  const obj = {};
  for (let j of data) {
    if (i === j.Team) {
      if (!obj[i]) {
        obj[i] = [];
      }
      obj[i].push(j);
    }
  }
  k.push(obj);
}

// Sorting
k.forEach((currk) => {
  for (var i in currk) {
    var leads = 0,
      currleads = 0;
    for (var m = 0; m < currk[i].length; m++) {
      leads += currk[i][m].Leads;
      currleads += currk[i][m].closedLeads;
      var currEfficeincyofmem =
        (currk[i][m].closedLeads / currk[i][m].Leads) * 100;
      currk[i][m].effic = Number(currEfficeincyofmem).toFixed(2);
    }
    var eff = (currleads / leads) * 100;
    currk[i].eff = Number(eff).toFixed(2);
    currk[i].teamLead = leads;
    currk[i].teamClosedLead = currleads;

    currk[i].sort((a, b) => (a.effic < b.effic ? 1 : -1));
  }
});

// Sort by team efficiency
k.sort((a, b) => {
  let [key1, value1] = Object.entries(a)[0];

  let [key2, value2] = Object.entries(b)[0];

  return value1.eff < value2.eff ? 1 : -1;
});


module.exports = {k}