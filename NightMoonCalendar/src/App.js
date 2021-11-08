import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson } from '@mobiscroll/react';

function App() {

    const [myEvents, setEvents] = React.useState([]);

    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);
    
    const responsive = React.useMemo(() => {
        return {
            xsmall: {
                view: {
                    calendar: {
                        type: 'week',
                    },
                    agenda: {
                        type: 'day'
                    }
                }
            },
            custom: { // Custom breakpoint
                breakpoint: 600,
                view: {
                    calendar: {
                        labels: true
                    }
                }
            }
        };
    }, []);

    return (
        <Eventcalendar
            theme="ios" 
            themeVariant="light"
            clickToCreate={false}
            dragToCreate={false}
            dragToMove={false}
            dragToResize={false}
            data={myEvents}
            responsive={responsive}
       />
    ); 
}

export default App;