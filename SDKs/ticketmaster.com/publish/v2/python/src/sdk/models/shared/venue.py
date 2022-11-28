from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VenueTypeEnum(str, Enum):
    EVENT = "event"
    VENUE = "venue"
    ATTRACTION = "attraction"


@dataclass_json
@dataclass
class Venue:
    r"""Venue
    Venue
    """
    
    type: VenueTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    accessible_seating_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessibleSeatingDetails') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    additional_infos: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInfos') }})
    address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    box_office_info: Optional[VenueBoxOfficeInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boxOfficeInfo') }})
    city: Optional[City] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[Country] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    descriptions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptions') }})
    discoverable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoverable') }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    dma: Optional[List[Dma]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dma') }})
    general_info: Optional[VenueGeneralInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generalInfo') }})
    images: Optional[List[Image]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    markets: Optional[List[Market]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('markets') }})
    names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    parking_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parkingDetails') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    references: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('references') }})
    relationships: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    social: Optional[Social] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('social') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    state: Optional[State] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
