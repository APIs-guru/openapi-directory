from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EmergencyContact:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'county' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    home_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homePhone' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    mobile_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilePhone' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    pager: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pager' }})
    primary_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryPhone' }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    relationship: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationship' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    sync_employee_info: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncEmployeeInfo' }})
    work_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workExtension' }})
    work_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workPhone' }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip' }})
    
