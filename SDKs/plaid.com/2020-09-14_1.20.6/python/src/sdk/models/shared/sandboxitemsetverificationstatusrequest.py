from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SandboxItemSetVerificationStatusRequestVerificationStatusEnum(str, Enum):
    AUTOMATICALLY_VERIFIED = "automatically_verified"
    VERIFICATION_EXPIRED = "verification_expired"


@dataclass_json
@dataclass
class SandboxItemSetVerificationStatusRequest:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    verification_status: SandboxItemSetVerificationStatusRequestVerificationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification_status' }})
    
