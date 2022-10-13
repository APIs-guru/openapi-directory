from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SandboxIncomeFireWebhookRequestVerificationStatusEnum(str, Enum):
    VERIFICATION_STATUS_PROCESSING_COMPLETE = "VERIFICATION_STATUS_PROCESSING_COMPLETE"
    VERIFICATION_STATUS_DOCUMENT_REJECTED = "VERIFICATION_STATUS_DOCUMENT_REJECTED"
    VERIFICATION_STATUS_PROCESSING_FAILED = "VERIFICATION_STATUS_PROCESSING_FAILED"


@dataclass_json
@dataclass
class SandboxIncomeFireWebhookRequest:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    income_verification_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'income_verification_id' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    verification_status: SandboxIncomeFireWebhookRequestVerificationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification_status' }})
    webhook: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook' }})
    
