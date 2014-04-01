// Bar Gauge JQuery Plugin
// By Robert Haddad (SmokinPuppy) @ 2014

function isInt(n) {
   return typeof n === 'number';
}

function isFloat(n){
	return n % 1 == 0;
}

Number.prototype.formatMoney = function(decPlaces, thouSeparator, decSeparator) {
    var n = this,
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
    decSeparator = decSeparator == undefined ? "." : decSeparator,
    thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
    sign = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
    return sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
};

(function( $ ) {
 
    $.fn.BarGauge = function(options) {
 
        // Here are the default options.
        var settings = $.extend({
            // These are the defaults.
            color: "#00C",				// Color of the Progress / Gauge Bar
            backgroundColor: "#FFF",	// Background color of Progress / Gauge Bar
			width: "754px",				// Default width of Bar (Original Graphic Size of faceplate)
			height: "72px",				// Default height of Bar
			value: 0.01,				// Default value of Bar Gauge
			goal: 1.00,					// Default Goal
			title: "BarGauge",			// Default Title of Bar Gauge
			showTitle: true,			// If True show title
			value_before: "",			// Default Value before text I.E. $1,000
			value_after: "",			// Default Value Text end text I.E 1,000 USD
			showValue: true,			// If True Show the value field in the Gauge Bar
			valueColor: '#3cff00',		// Default Value Color 
			faceplate: "url(stylesheets/BarGauge/bar_graph.png) no-repeat", // Default locaiton of faceplate graphic
			animSpeed: 400,				// Animation Speed
			animType: "swing",			// Animation Type
			decPlaces: 2,				// Default decimal places on the text field
			thouSeparator: ',', 		// Default Thousands seperator I.E. 1,000 or 1.000
			decSeparator: '.'			// Default Decimal Separator I.E. 0.001 or 0,001
        }, options );
		
		var mainDivId = this.uniqueId(); // Generate Unique ID for container div
		
		// Generate Bar with Options
		var useTitle = "";
		if(settings.showTitle){
			useTitle = '<div id="' + mainDivId + '_title" class="barGauge_title">' + settings.title + '</div>';
		}
		this.append('<div id="' + mainDivId + '_bar" class="barGauge_bar"></div>' +
   			'<div id="' + mainDivId + '_text" class="barGauge_text"></div>' +
    		'<div id="' + mainDivId + '_forground" class="barGauge_forground"></div>' +
        	useTitle);
 		
		// Generate CSS from options
        this.css({ 
			backgroundColor: settings.backgroundColor,
			width: settings.width,
			height: settings.height
		});
		
		$(mainDivId.selector + ' .barGauge_forground').css({
			background: settings.faceplate
		});
		
		$(mainDivId.selector + ' .barGauge_bar').css({
			background: settings.color,
		}); 
		
		$(mainDivId.selector + ' .barGauge_text').css({
			color: settings.valueColor
		});
		
		// Move the Bar Graph
		var useValue = 0;
		if(isInt(settings.value) && isInt(settings.goal)){
			useValue = (settings.value / settings.goal)*100;
		}
		var value_text_string = "";
		if(settings.showValue){
			value_text_string = settings.value_before + settings.value.formatMoney(settings.decPlaces, settings.thouSeparator, settings.decSeparator) + settings.value_after;
		}
		$(mainDivId.selector + ' .barGauge_text').html(value_text_string);
		$(mainDivId.selector + ' .barGauge_bar').animate({width: useValue + '%'},settings.animSpeed,settings.animType);
		
	};
}( jQuery ));