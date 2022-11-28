from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SelfMfaTypeUnregisterRequestMfaTypeEnum(str, Enum):
    SMS = "SMS"
    YUBIKEY = "YUBIKEY"
    TOTP = "TOTP"


@dataclass_json
@dataclass
class SelfMfaTypeUnregisterRequest:
    mfa_type: SelfMfaTypeUnregisterRequestMfaTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaType') }})
    
