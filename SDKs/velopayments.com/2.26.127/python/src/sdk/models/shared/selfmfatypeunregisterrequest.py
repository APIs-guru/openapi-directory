from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class SelfMfaTypeUnregisterRequestMfaTypeEnum(str, Enum):
    SMS = "SMS"
    YUBIKEY = "YUBIKEY"
    TOTP = "TOTP"


@dataclass_json
@dataclass
class SelfMfaTypeUnregisterRequest:
    mfa_type: SelfMfaTypeUnregisterRequestMfaTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mfaType' }})
    
