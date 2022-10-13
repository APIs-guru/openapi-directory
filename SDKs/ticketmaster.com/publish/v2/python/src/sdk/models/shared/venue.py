from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import address
from . import venueboxofficeinfo
from . import city
from . import country
from . import dma
from . import venuegeneralinfo
from . import image
from . import location
from . import market
from . import social
from . import source
from . import state

class VenueTypeEnum(str, Enum):
    EVENT = "event"
    VENUE = "venue"
    ATTRACTION = "attraction"


@dataclass_json
@dataclass
class Venue:
    accessible_seating_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessibleSeatingDetails' }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    additional_infos: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalInfos' }})
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    box_office_info: Optional[venueboxofficeinfo.VenueBoxOfficeInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boxOfficeInfo' }})
    city: Optional[city.City] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[country.Country] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    descriptions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptions' }})
    discoverable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoverable' }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    dma: Optional[List[dma.Dma]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dma' }})
    general_info: Optional[venuegeneralinfo.VenueGeneralInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generalInfo' }})
    images: Optional[List[image.Image]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    markets: Optional[List[market.Market]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markets' }})
    names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names' }})
    parking_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parkingDetails' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    references: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'references' }})
    relationships: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    social: Optional[social.Social] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'social' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    state: Optional[state.State] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    type: VenueTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'units' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
