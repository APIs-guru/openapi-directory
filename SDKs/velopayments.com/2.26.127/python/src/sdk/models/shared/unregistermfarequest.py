from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UnregisterMfaRequestMfaTypeEnum(str, Enum):
    YUBIKEY = "YUBIKEY"
    TOTP = "TOTP"


@dataclass_json
@dataclass
class UnregisterMfaRequest:
    mfa_type: UnregisterMfaRequestMfaTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mfaType' }})
    verification_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationCode' }})
    
