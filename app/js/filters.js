'use strict';

eventsApp.filter('durations', () => (duration) => {
        switch (duration) {
            case 1:
                return "Half Hour";
                break;
            case 2:
                return "1 Hour";
                break;
            case 3:
                return "Half Day";
                break;
            case 4:
                return "Full Day";
                break;
        }
})