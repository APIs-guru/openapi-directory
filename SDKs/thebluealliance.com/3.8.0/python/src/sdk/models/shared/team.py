from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Team:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    gmaps_place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gmaps_place_id' }})
    gmaps_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gmaps_url' }})
    home_championship: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home_championship' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lng' }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_name' }})
    motto: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'motto' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal_code' }})
    rookie_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rookie_year' }})
    school_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'school_name' }})
    state_prov: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state_prov' }})
    team_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_number' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    
