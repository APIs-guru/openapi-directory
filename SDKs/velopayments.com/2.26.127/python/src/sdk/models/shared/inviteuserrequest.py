from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class InviteUserRequestMfaTypeEnum(str, Enum):
    SMS = "SMS"
    YUBIKEY = "YUBIKEY"
    TOTP = "TOTP"


@dataclass_json
@dataclass
class InviteUserRequest:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityId' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    mfa_type: InviteUserRequestMfaTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mfaType' }})
    primary_contact_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryContactNumber' }})
    roles: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    secondary_contact_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryContactNumber' }})
    sms_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smsNumber' }})
    verification_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationCode' }})
    
