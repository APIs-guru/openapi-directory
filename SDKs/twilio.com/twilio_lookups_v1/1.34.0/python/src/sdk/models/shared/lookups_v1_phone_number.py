from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LookupsV1PhoneNumber:
    add_ons: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_ons' }})
    caller_name: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caller_name' }})
    carrier: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    national_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'national_format' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
