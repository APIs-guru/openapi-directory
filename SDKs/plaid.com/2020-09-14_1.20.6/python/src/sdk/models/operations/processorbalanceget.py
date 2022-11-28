from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProcessorBalanceGetRequest:
    request: shared.ProcessorBalanceGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProcessorBalanceGetResponse:
    content_type: str = field()
    status_code: int = field()
    processor_balance_get_response: Optional[dict[str, Any]] = field(default=None)
    
