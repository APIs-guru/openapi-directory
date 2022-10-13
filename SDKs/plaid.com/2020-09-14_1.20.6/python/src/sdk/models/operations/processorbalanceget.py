from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProcessorBalanceGetRequest:
    request: shared.ProcessorBalanceGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProcessorBalanceGetResponse:
    content_type: str = field(default=None)
    processor_balance_get_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
