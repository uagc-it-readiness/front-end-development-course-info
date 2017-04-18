(function () {
    'use strict';

    angular
        .module('app')
        .factory('Sessions', Sessions);

    Sessions.$inject = [];

    function Sessions() {
        var service = {
            getSessions: getSessions
        };
        var assignmentBase = 'https://github.com/uagc-it-readiness/front-end-development-course-assignments/tree/master/';

        /*#region*/
        var s1 = {
            num: 1,
            date: '10/4/2016',
            links: [
                ['Class Intro', 'intro/intro.html'],
                ['Web Technology Intro', 'intro/web-intro.html'],
                ['Web Tool Intro', 'intro/tools.html'],
            ]
        };

        var s2 = {
            num: 2,
            date: '10/6/2016',
            links: [
                ['HTML Intro', 'html/basics.html'],
            ]
        };
        var s3 = {
            num: 3,
            date: '10/8/2016',
            links: [
                ['Source Control Intro', 'sourcecontrol/intro.html'],
                ['Assignment 1', 'https://github.com/uagc-it-readiness/front-end-development-course-assignments/tree/master/Assignment1'],
            ]
        };
        var s4 = {
            num: 4,
            date: '10/11/2016',
            links: [
                ['HTML Continued', 'html/basics-continued.html'],
                ['CSS Introduction', 'css/intro.html'],
                ['Assignment 2', 'https://github.com/uagc-it-readiness/front-end-development-course-assignments/tree/master/Assignment2'],
            ]
        };
        var s5 = {
            num: 5,
            date: '10/13/2016',
            links: [
                ['CSS Part 2', 'css/part2.html'],
                ['Assignment 3', 'https://github.com/uagc-it-readiness/front-end-development-course-assignments/tree/master/Assignment3'],

            ]
        };
        var s6 = {
            num: 6,
            date: '10/18/2016',
            links: [
                ['CSS Part 3', 'css/part3.html'],
                ['Assignment 4', 'https://github.com/uagc-it-readiness/front-end-development-course-assignments/tree/master/Assignment4'],

            ]
        };
        var s7 = {
            num: 7,
            date: '10-20-2016',
            links: [
                ['CSS Part 4', 'css/part4.html'],
                ['Assignment 5', 'https://github.com/uagc-it-readiness/front-end-development-course-assignments/tree/master/Assignment5'],
            ]
        };
        var s8 = {
            num: 8,
            date: '10/22/2016',
            links: [
                ['Review', 'review/review-one.html'],
            ]
        };
        var s9 = {
            num: 9,
            date: '10/25/2016',
            links: [
                ['CSS Part 5', 'css/part5.html'],
                ['Assignment 6', 'https://github.com/uagc-it-readiness/front-end-development-course-assignments/tree/master/Assignment6'],
            ]
        };
        var s10 = {
            num: 10,
            date: '10/27/2016',
            links: [
                ['HTML5 Semantic Elements', 'html/html5-elements.html'],
                ['CSS Part 6', 'css/part6.html'],
                ['Assignment 7', 'https://github.com/uagc-it-readiness/front-end-development-course-assignments/tree/master/Assignment7'],


            ]
        };


        var october = {
            name: 'October',
            isActive: false,
            sessions: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
        };

        /*#endregion*/


        /*
                var s11 = {
                    num: 11,
                    date: '11/1/2016',
                    links: [
                        {text: '',url: ''},
                    ]
                };
                */




        var s11 = {
            num: 11,
            date: '11/1/2016',
            links: [
                ['JS Intro', 'js/intro.html'],
                ['Assignment 8', assignmentBase + 'Assignment8']
            ]
        };

        var s12 = {
            num: 12,
            date: '11/3/2016',
            links: [
                ['JS Part 2', 'js/part2.html'],
                ['Assignment 9', assignmentBase + 'Assignment9']
            ]
        };

        var s13 = {
            num: 13,
            date: '11/5/2016',
            links: [
                ['JS Part 3', 'js/part3.html'],
                ['Assignment 10', assignmentBase + 'Assignment10']
            ]
        };

        var s14 = {
            num: 14,
            date: '11/8/2016',
            links: [
                ['JS Part 4', 'js/part4.html'],
                ['Assignment 11', assignmentBase + 'Assignment11']
            ]
        };
        var s15 = {
            num: 15,
            date: '11/10/2016',
            links: [
                ['JS Part 5', 'js/part5.html'],
                ['Assignment 12', assignmentBase + 'Assignment12']
            ]
        };
        var s16 = {
            num: 16,
            date: '11/15/2016',
            links: [
                ['Forms', 'html/forms.html'],
                ['Assignment 13', assignmentBase + 'Assignment13']
            ]
        };


        var s17 = {
            num: 17,
            date: '11/17/2016',
            links: [
                ['Forms Continued', 'html/forms-2.html'],
                ['Assignment 14', assignmentBase + 'Assignment14']
            ]
        };

        var s18 = {
            num: 18,
            date: '11/19/2016',
            links: [
                ['JS Review', 'js/review.html'],
                ['Assessment 2', assignmentBase + 'Assessment 2']
            ]
        };

        var s19 = {
            num: 19,
            date: '11/22/2016',
            links: []
        };

        var s20 = {
            num: 20,
            date: '11/29/2016',
            links: [
                ['Selectors and jQuery', 'sessions/18-selectors-jquery.html'],
                ['Assignment 15', assignmentBase + 'Assignment15']
            ]
        };










        var november = {
            name: 'November',
            isActive: false,
            sessions: []
        };
        november.sessions.push(s11);
        november.sessions.push(s12);
        november.sessions.push(s13);
        november.sessions.push(s14);
        november.sessions.push(s15);
        november.sessions.push(s16);
        november.sessions.push(s17);
        november.sessions.push(s18);
        november.sessions.push(s19);
        november.sessions.push(s20);


        var december = {
            name: 'December',
            isActive: false,
            sessions: []
        };

        var s21 = {
            num: 21,
            date: '12/1/2016',
            links: [
                ['Attributes and Displaying', 'sessions/19.html'],
                ['Assignment 16', assignmentBase + 'Assignment16']
            ]
        };

        var s22 = {
            num: 22,
            date: '12/3/2016',
            links: [
                ['Emails, Children, Classes, and Traversing', 'sessions/20.html']
            ]
        };

        var s23 = {
            num: 23,
            date: '12/6/2016',
            links: [
                ['Blur and Callbacks', 'sessions/21.html'],
                ['Assignment 17', assignmentBase + 'Assignment17']
            ]
        };

        var s24 = {
            num: 24,
            date: '12/8/2016',
            links: [
                ['Data Attributes', 'sessions/22.html'],
                ['Assignment 18', assignmentBase + 'Assignment18']
            ]
        };

        var s25 = {
            num: 25,
            date: '12/13/2016',
            links: [
                ['Ajax', 'sessions/23.html'],
                ['Assignment 19', assignmentBase + 'Assignment19']
            ]
        };



        december.sessions.push(s21);
        december.sessions.push(s22);
        december.sessions.push(s23);
        december.sessions.push(s24);
        december.sessions.push(s25);

        december.sessions.push({
            num: 26,
            date: '12/15/2016',
            links: [
                ['Review', 'sessions/24.html'],
                ['Assignment 20', assignmentBase + 'Assignment20']
            ]
        })

        var jan = {
            name: 'January',
            isActive: false,
            sessions: [{
                    num: 27,
                    date: '1/3/2017',
                    links: [
                        ['Intro to Responsive', 'sessions/25.html'],
                        ['Assignment 21', assignmentBase + 'Assignment21']
                    ]

                }, {
                    num: 28,
                    date: '1/5/2017',
                    links: [
                        ['Responsive Layouts', 'sessions/26.html'],
                        ['Assignment 22', assignmentBase + 'Assignment22']
                    ]
                }, {
                    num: 29,
                    date: '1/10/2017',
                    links: [
                        ['Font/Icon Libraries', 'sessions/27.html'],
                        ['Assignment 23', assignmentBase + 'Assignment23']
                    ]


                },
                {
                    num: 30,
                    date: '1/12/2017',
                    links: [
                        ['Bootstrap', 'http://getbootstrap.com']
                    ]
                },
                {
                    num: 31,
                    date: '1/14/2017',
                    links: [
                        ['Review', 'sessions/29.html'],
                        ['Assignment 24', assignmentBase + 'Assignment24']
                    ]
                },
                {
                    num: 32,
                    date: '1/17/2017',
                    links: [
                        ['Navigation', 'sessions/30.html'],
                        ['Assignment 25', assignmentBase + 'Assignment25']
                    ]
                },
                {
                    num: 33,
                    date: '1/19/2017',
                    links: [
                        ['Rotators', 'sessions/31.html'],
                    ]
                },
                {
                    num: 34,
                    date: '1/24/2017',
                    links: [
                        ['Modals', 'sessions/32.html'],
                    ]
                },
                {
                    num: 35,
                    date: '1/26/2017',
                    links: [
                        ['Flexbox', 'sessions/33.html'],
                    ]
                },

                {
                    num: 36,
                    date: '1/28/2017',
                    links: [
                        ['Portfolios', 'sessions/34.html'],
                    ]
                },
                {
                    num: 37,
                    date: '1/31/2017',
                    links: [
                        ['Image Optimization', 'sessions/35.html'],
                    ]
                },





            ]

        }

        var feb = {
            name: 'February',
            isActive: true,
            sessions: [{
                    num: 38,
                    date: '2/2/2017',
                    links: [
                        ['Intro to task runners', 'sessions/36.html']
                    ]

                },
                {
                    num: 39,
                    date: '2/14/2017',
                    links: [
                        ['SCSS', 'sessions/37.html']
                    ]

                },
                {
                    num: 40,
                    date: '2/16/2017',
                    links: [
                        ['More SCSS', 'sessions/38.html']
                    ]

                },

                {
                    num: 41,
                    date: '2/22/2017',
                    links: [
                        ['Advanced SCSS', 'sessions/39.html']
                    ]

                },

                {
                    num: 42,
                    date: '2/28/2017',
                    links: [
                        ['AJAX Review and JS Templates', 'sessions/40.html']
                    ]

                },





            ]
        }
        var march = {
            name: 'March',
            isActive: true,
            sessions: [{
                    num: 43,
                    date: '3/9/2017',
                    links: [
                        ['jQuery plugins', 'sessions/41.html']
                    ]

                },
                {
                    num: 44,
                    date: '3/14/2017',
                    links: [
                        ['Slides', 'sessions/42.html']
                    ]

                },
                {
                    num: 45,
                    date: '3/15/2017',
                    links: [
                        ['Slides', 'sessions/43.html']
                    ]

                },
                {
                    num: 46,
                    date: '3/21/2017',
                    links: [
                        ['Slides', 'sessions/44.html']
                    ]

                },
                {
                    num: 47,
                    date: '3/23/2017',
                    links: [
                        ['Slides', 'sessions/45.html']
                    ]

                },
                {
                    num: 48,
                    date: '3/28/2017',
                    links: [
                        ['ES6', 'sessions/46.html']
                    ]

                },
                {
                    num: 49,
                    date: '3/30/2017',
                    links: [
                        ['More ES6', 'sessions/47.html']
                    ]

                },

            ]
        }
        var may = {
            name: 'May',
            isActive: true,
            sessions: [{

                    num: 50,
                    date: '4/4/2017',
                    links: [
                        ['Import and Export and Classes', 'sessions/48.html']
                    ]

                },

                {

                    num: 51,
                    date: '4/4/2017',
                    links: [
                        [' Classes and dates', 'sessions/49.html']
                    ]

                },
                {

                    num: 52,
                    date: '4/18/2017',
                    links: [
                        ['TypeScript', 'sessions/50.html']
                    ]

                },

            ]
        }


        var sessions = [
            october,
            november,
            december,
            jan,
            feb,
            march,
            may

        ];
        /* beautify ignore:end */



        return service;



        function getSessions() {
            return sessions;
        }
    }
})();