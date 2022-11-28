from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Event:
    end_date: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_code') }})
    event_type: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_type') }})
    event_type_string: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_type_string') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    start_date: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    year: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    district: Optional[DistrictList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('district') }})
    division_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('division_keys') }})
    first_event_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_event_code') }})
    first_event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_event_id') }})
    gmaps_place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gmaps_place_id') }})
    gmaps_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gmaps_url') }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_name') }})
    parent_event_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_event_key') }})
    playoff_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playoff_type') }})
    playoff_type_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playoff_type_string') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code') }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('short_name') }})
    state_prov: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state_prov') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    webcasts: Optional[List[Webcast]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webcasts') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('week') }})
    
