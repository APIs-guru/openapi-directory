from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayeeUserSelfUpdateRequest:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    primary_contact_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryContactNumber' }})
    secondary_contact_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryContactNumber' }})
    sms_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smsNumber' }})
    
