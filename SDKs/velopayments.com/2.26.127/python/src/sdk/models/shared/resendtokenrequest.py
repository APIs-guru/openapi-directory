from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ResendTokenRequestTokenTypeEnum(str, Enum):
    INVITE_MFA_USER = "INVITE_MFA_USER"
    MFA_REGISTRATION = "MFA_REGISTRATION"


@dataclass_json
@dataclass
class ResendTokenRequest:
    token_type: ResendTokenRequestTokenTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenType') }})
    verification_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationCode') }})
    
