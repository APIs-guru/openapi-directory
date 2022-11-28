from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EventTypeEnum(str, Enum):
    EVENT = "event"
    VENUE = "venue"
    ATTRACTION = "attraction"


@dataclass_json
@dataclass
class Event:
    r"""Event
    Event
    """
    
    type: EventTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    additional_infos: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInfos') }})
    attractions: Optional[List[Attraction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attractions') }})
    classifications: Optional[List[Classification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifications') }})
    dates: Optional[EventDates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dates') }})
    descriptions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptions') }})
    discoverable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoverable') }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    images: Optional[List[Image]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    infos: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infos') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    place: Optional[Place] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('place') }})
    please_notes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pleaseNotes') }})
    price_ranges: Optional[List[PriceRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceRanges') }})
    promoter: Optional[Promoter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promoter') }})
    public_visibility: Optional[PublicVisibility] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicVisibility') }})
    references: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('references') }})
    relationships: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    sales: Optional[EventSalesDates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sales') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    venue: Optional[Venue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('venue') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
