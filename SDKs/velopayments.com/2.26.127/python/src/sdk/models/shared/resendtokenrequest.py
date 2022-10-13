from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ResendTokenRequestTokenTypeEnum(str, Enum):
    INVITE_MFA_USER = "INVITE_MFA_USER"
    MFA_REGISTRATION = "MFA_REGISTRATION"


@dataclass_json
@dataclass
class ResendTokenRequest:
    token_type: ResendTokenRequestTokenTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenType' }})
    verification_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationCode' }})
    
