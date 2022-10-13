from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProcessorStripeBankAccountTokenCreateRequest:
    request: shared.ProcessorStripeBankAccountTokenCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProcessorStripeBankAccountTokenCreateResponse:
    content_type: str = field(default=None)
    processor_stripe_bank_account_token_create_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
