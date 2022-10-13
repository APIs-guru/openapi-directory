from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Address:
    address_line_1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_line_1' }})
    address_line_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_line_2' }})
    address_line_3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_line_3' }})
    administrative_district_level_1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'administrative_district_level_1' }})
    administrative_district_level_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'administrative_district_level_2' }})
    administrative_district_level_3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'administrative_district_level_3' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locality' }})
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal_code' }})
    sublocality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sublocality' }})
    sublocality_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sublocality_2' }})
    sublocality_3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sublocality_3' }})
    
