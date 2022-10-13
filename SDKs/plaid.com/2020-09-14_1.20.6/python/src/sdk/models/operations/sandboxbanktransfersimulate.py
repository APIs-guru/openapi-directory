from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SandboxBankTransferSimulateRequest:
    request: shared.SandboxBankTransferSimulateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SandboxBankTransferSimulateResponse:
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    sandbox_bank_transfer_simulate_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
