from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DetailedServiceAddress:
    address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_line1' }})
    address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_line2' }})
    building_name_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'building_name_number' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    clinic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clinic_name' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    wing_floor_or_room_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wing_floor_or_room_number' }})
    zip_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip_code' }})
    
