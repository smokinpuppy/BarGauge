BarGauge
========

Small jQuery Plugin to display a Progress / Bar Gauge


Usage:
======

Include in Head Tag:

&lt;script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="http://code.jquery.com/ui/1.10.4/jquery-ui.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="js/jquery.BarGauge.js"&gt;&lt;/script&gt;


JavaScript / jQuery:

$('#demo1').BarGauge({
	color: "#00C", 			// Color of the Progress / Gauge Bar 
	backgroundColor: "#FFF", 	// Background color of Progress / Gauge Bar
	width: "754px", 		// Default width of Bar (Original Graphic Size of faceplate)
	height: "72px", 		// Default height of Bar
	value: 0.01, 			// Value of Bar Gauge (Current Position)
	goal: 1.00, 			// Goal of Bar Gauge (Maximum Position)
	title: "BarGauge", 		// Default Title of Bar Gauge
	showTitle: true, 		// If True show title
	value_before: "", 		// Default Value before text I.E. $1,000
	value_after: "", 		// Default Value Text end text I.E 1,000 USD
	showValue: true, 		// If True Show the value field in the Gauge Bar
	valueColor: '#3cff00', 		// Default Value Color 
	faceplate: "url(css/BarGauge/bar_graph.png) no-repeat", // Default locaiton of faceplate graphic other options (bar_graph(colorScale).png and bar_graph(gradient).png)
	animSpeed: 400, 		// Animation Speed can be string "slow","fast",etc... Or Integer
	animType: "swing", 		// Animation Type (jQuery Animation Methods)
	decPlaces: 2, 			// Default decimal places on the text field when showing value
	thouSeparator: ',', 		// Default Thousands seperator I.E. 1,000 or 1.000
	decSeparator: '.' 		// Default Decimal Separator I.E. 0.001 or 0,001
}); 


HTML:

&lt;div id="demo1" class="barGauge_container" &gt;&lt;/div&gt; 
