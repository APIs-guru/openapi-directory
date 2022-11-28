from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SandboxBankTransferSimulateRequest:
    r"""SandboxBankTransferSimulateRequest
    SandboxBankTransferSimulateRequest defines the request schema for `/sandbox/bank_transfer/simulate`
    """
    
    bank_transfer_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_transfer_id') }})
    event_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_type') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    failure_reason: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failure_reason') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
