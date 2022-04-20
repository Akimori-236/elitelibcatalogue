//  Data Init
var categoryList = {
    "00" : "NON-PUBLISHED",
    "10" : "WIND BAND",
    "11" : "WIND BAND (A5)",
    "12" : "CEREMONIAL MUSIC",
    "13" : "FOREIGN ANTHEM",
    "14" : "WIND BAND TRAINING",
    "20" : "FLUTE",
    "21" : "OBOE",
    "22" : "COR ANGLAIS",
    "23" : "BASSOON",
    "24" : "CLARINET",
    "25" : "SAXOPHONE",
    "30" : "HORN",
    "31" : "TRUMPET",
    "32" : "TROMBONE",
    "33" : "EUPHONIUM",
    "34" : "TUBA",
    "40" : "STRINGS",
    "41" : "PIANO",
    "42" : "HARP/GUITAR",
    "50" : "PERCUSSION",
    "60" : "RECORDER",
    "61" : "VOCAL",
    "70" : "WOODWIND ENSEMBLE",
    "71" : "BRASS ENSEMBLE",
    "72" : "MIXED ENSEMBLE",
    "73" : "FLEXIBLE ENSEMBLE",
    "74" : "BIG BAND",
    "80" : "REFERENCE",
    "81" : "THEORY PAPERS G5",
    "82" : "THEORY PAPERS G6",
    "83" : "THEORY PAPERS G7",
    "84" : "THEORY PAPERS G8",
    "85" : "THEORY MATERIAL",
    "86" : "AURAL MATERIAL",
    "90" : "WIND BAND/ORCH DISC",
    "91" : "INSTRUMENT/CHAMBER DISC",
    "92" : "MISCELLANEOUS/ARCHIVE DISC",
    "93" : "WIND BAND TRAINING DISC",
    "94" : "MARCHING BAND DISC"
};
var ensembleList = [
    "Concert Band",
    "Marching Band",
    "Solo",
    "Ensemble",
    "Big Band",
    "Study",
    "Reference",
    "Others"
];


// get genres
var allCategories = function () {
    var tmp = null;
    $.ajax({
        url: 'http://localhost:5000/genres',
        type: "GET",
        dataType: 'json',
        async: false,
        global: false,
        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
        'success': function (data) {
            tmp = data;
        }
    });
    return tmp;
}();
allCategories = allCategories['Category']