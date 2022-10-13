from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SandboxBankTransferSimulateRequest:
    bank_transfer_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank_transfer_id' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    event_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_type' }})
    failure_reason: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failure_reason' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
