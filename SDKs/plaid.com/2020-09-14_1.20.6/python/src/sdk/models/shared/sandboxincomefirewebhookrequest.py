from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SandboxIncomeFireWebhookRequestVerificationStatusEnum(str, Enum):
    VERIFICATION_STATUS_PROCESSING_COMPLETE = "VERIFICATION_STATUS_PROCESSING_COMPLETE"
    VERIFICATION_STATUS_DOCUMENT_REJECTED = "VERIFICATION_STATUS_DOCUMENT_REJECTED"
    VERIFICATION_STATUS_PROCESSING_FAILED = "VERIFICATION_STATUS_PROCESSING_FAILED"


@dataclass_json
@dataclass
class SandboxIncomeFireWebhookRequest:
    r"""SandboxIncomeFireWebhookRequest
    SandboxIncomeFireWebhookRequest defines the request schema for `/sandbox/income/fire_webhook`
    """
    
    income_verification_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('income_verification_id') }})
    verification_status: SandboxIncomeFireWebhookRequestVerificationStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification_status') }})
    webhook: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
