from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attraction
from . import classification
from . import eventdates
from . import image
from . import location
from . import place
from . import pricerange
from . import promoter
from . import publicvisibility
from . import eventsalesdates
from . import source
from . import venue

class EventTypeEnum(str, Enum):
    EVENT = "event"
    VENUE = "venue"
    ATTRACTION = "attraction"


@dataclass_json
@dataclass
class Event:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    additional_infos: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalInfos' }})
    attractions: Optional[List[attraction.Attraction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attractions' }})
    classifications: Optional[List[classification.Classification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classifications' }})
    dates: Optional[eventdates.EventDates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dates' }})
    descriptions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptions' }})
    discoverable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoverable' }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    images: Optional[List[image.Image]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    infos: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infos' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names' }})
    place: Optional[place.Place] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'place' }})
    please_notes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pleaseNotes' }})
    price_ranges: Optional[List[pricerange.PriceRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceRanges' }})
    promoter: Optional[promoter.Promoter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promoter' }})
    public_visibility: Optional[publicvisibility.PublicVisibility] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicVisibility' }})
    references: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'references' }})
    relationships: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    sales: Optional[eventsalesdates.EventSalesDates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sales' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    type: EventTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'units' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    venue: Optional[venue.Venue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'venue' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
