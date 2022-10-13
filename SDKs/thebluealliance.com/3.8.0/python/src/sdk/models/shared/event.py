from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import district_list
from . import webcast


@dataclass_json
@dataclass
class Event:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    district: Optional[district_list.DistrictList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'district' }})
    division_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'division_keys' }})
    end_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_code' }})
    event_type: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_type' }})
    event_type_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_type_string' }})
    first_event_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_event_code' }})
    first_event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_event_id' }})
    gmaps_place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gmaps_place_id' }})
    gmaps_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gmaps_url' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lng' }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_name' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_event_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_event_key' }})
    playoff_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playoff_type' }})
    playoff_type_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playoff_type_string' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal_code' }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'short_name' }})
    start_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state_prov: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state_prov' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    webcasts: Optional[List[webcast.Webcast]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webcasts' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'week' }})
    year: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
