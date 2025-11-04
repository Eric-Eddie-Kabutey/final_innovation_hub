import EventsMain from '@/components/events/events-main'
import InternalEvents from '@/components/events/internal-events'
import Tabs from '@/components/events/tabs'


function Events() {
  return (
    <div>
      {/* Event Tabs */}
      <Tabs />
      
      {/* upcoming programs */}
      <EventsMain />
      
      {/* internal events */}
      <InternalEvents />
    </div>
  )
}

export default Events