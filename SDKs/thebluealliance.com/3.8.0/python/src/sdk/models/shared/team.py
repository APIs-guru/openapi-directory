from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Team:
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    team_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_number') }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    gmaps_place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gmaps_place_id') }})
    gmaps_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gmaps_url') }})
    home_championship: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_championship') }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_name') }})
    motto: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('motto') }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code') }})
    rookie_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rookie_year') }})
    school_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('school_name') }})
    state_prov: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state_prov') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
