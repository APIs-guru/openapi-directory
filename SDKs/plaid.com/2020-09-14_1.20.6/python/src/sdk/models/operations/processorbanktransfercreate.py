from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProcessorBankTransferCreateRequest:
    request: shared.ProcessorBankTransferCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProcessorBankTransferCreateResponse:
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    processor_bank_transfer_create_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
