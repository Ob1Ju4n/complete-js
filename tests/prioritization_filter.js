var prioritization = {
    "audiences":[{
        "audience": {
            "type": "keystone",
            "id": "Everyone"
        },
        "grounding": {
            "groundLevel": 500,
            "floatLevel": 50
        }
    }]
};

var accessControlIds  = ["Everyone"];

for (var i = 0; i < accessControlIds.length; i++){
    var currentRoleId = accessControlIds[i];
    var associatedGrounding = prioritization.audiences.filter(function (item) {
        return item.audience.id === currentRoleId;
    });
    //console.log("Grounding: " + JSON.stringify(associatedGrounding[0]));
    console.log("ground lvl: " + associatedGrounding[0].grounding.groundLevel);
    console.log("float lvl: " + associatedGrounding[0].grounding.floatLevel);
}

