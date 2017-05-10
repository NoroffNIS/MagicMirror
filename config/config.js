/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:172.24.1.112","::ffff:127.0.0.1", "::1", "172.24.1.23", "172.24.1.0/24"],

	language: 'en',
	timeFormat: 24,
	units: 'metric',
	zoom:'10',

	modules: [
		{
			module: 'alert',
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
        module: 'MMM-SimpleLogo',
        position: 'top_left',   // This can be any of the regions.
        config: {
            fileUrl: 'modules/MMM-SimpleLogo/public/noroff-logo.jpg',
						width: '300px',
						position: 'center'
        }
    },
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'MMM-Calendar',
			header: 'Noroff Stavanger',
			position: 'top_left',
			config: {
				colored: true,
				calendars: [
					{
						symbol: 'graduation-cap',
						url: 'https://no.timeedit.net/web/noroff/db1/ansatt/ri6YZ5p2Sa62w6QZYZQ8Q55QZQ8Qc50ntjQYxYeyZg5g5ndjZ890tA37573F200C753A30A40C87C072EE81E0.ics',
						campus: 'STA',
						location: 'Room'
					},
					{
						symbol: 'calendar-plus-o ',
						url: 'https://www.google.com/calendar/ical/no.norwegian%23holiday%40group.v.calendar.google.com/public/basic.ics',
						color: 'rgb(139, 0, 0)'
					}
				]
			}
		},
		{
			module: 'MMM-YrNow',
			position: 'top_right',
			config: {
				locationId: '1-2783845',
				showWeatherForecast: true
			}
		},

		{
			module: 'iFrame',
			position: 'bottom_right', // This can be any of the regions.
			config: {
							url:"http://sis.kolumbus.no/minskjerm/FST.aspx?visMode=2&cTit=&c1=1&s1=11031544&sv1=1000&cn1=&c2=1&s2=11031544&sv2=1005&cn2=&c3=1&s3=11031544&sv3=1020&cn3=&c4=1&s4=11031544&sv4=1033&cn4=&c5=1&s5=11031545&sv5=1000&cn5=&c6=1&s6=11031545&sv6=1005&cn6=&c7=1&s7=11031545&sv7=1020&cn7=&c8=1&s8=11031545&sv8=1033&cn8=&template=1&cmhb=000000&cmhc=000000&cshb=000000&cshc=ffffff&arb=2D2D2C&rows=&period=&",
							width:"700px",
							height:"500px"
					}
    },
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "NRK.no",
						url: "http://www.nrk.no/toppsaker.rss",
						encoding: "UTF-8"
					},
					{
						title: "Noroff Blogg",
						url: "https://www.noroff.no/blogg?feed=rss2",
						encoding: "UTF-8"
					}

				],
				showSourceTitle: true,
				showPublishDate: false,
				showDescription: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
