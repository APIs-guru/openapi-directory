from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mfatype_enum


@dataclass_json
@dataclass
class UserDetailsUpdateRequest:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    mfa_type: Optional[mfatype_enum.MfaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mfaType' }})
    primary_contact_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryContactNumber' }})
    secondary_contact_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryContactNumber' }})
    sms_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smsNumber' }})
    verification_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationCode' }})
    
