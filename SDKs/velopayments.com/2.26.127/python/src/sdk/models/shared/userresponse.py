from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UserResponseMfaStatusEnum(str, Enum):
    REGISTERED = "REGISTERED"
    UNREGISTERED = "UNREGISTERED"

class UserResponseMfaTypeEnum(str, Enum):
    SMS = "SMS"
    YUBIKEY = "YUBIKEY"
    TOTP = "TOTP"

class UserResponseStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    PENDING = "PENDING"


@dataclass_json
@dataclass
class UserResponse:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    entity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityId') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    locked_out: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockedOut') }})
    locked_out_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockedOutTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mfa_status: Optional[UserResponseMfaStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaStatus') }})
    mfa_type: Optional[UserResponseMfaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaType') }})
    primary_contact_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactNumber') }})
    roles: Optional[List[Role]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    secondary_contact_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryContactNumber') }})
    sms_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsNumber') }})
    status: Optional[UserResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
