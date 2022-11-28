from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProcessorBankTransferCreateRequest:
    request: shared.ProcessorBankTransferCreateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProcessorBankTransferCreateResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    processor_bank_transfer_create_response: Optional[dict[str, Any]] = field(default=None)
    
