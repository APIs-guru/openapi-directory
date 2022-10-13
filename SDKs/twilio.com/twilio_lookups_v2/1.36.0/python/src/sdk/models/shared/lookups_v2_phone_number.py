from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import phone_number_enum_validation_error_enum


@dataclass_json
@dataclass
class LookupsV2PhoneNumber:
    call_forwarding: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_forwarding' }})
    caller_name: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caller_name' }})
    calling_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calling_country_code' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    line_type_intelligence: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_type_intelligence' }})
    live_activity: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'live_activity' }})
    national_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'national_format' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    sim_swap: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sim_swap' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid' }})
    validation_errors: Optional[List[phone_number_enum_validation_error_enum.PhoneNumberEnumValidationErrorEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validation_errors' }})
    
