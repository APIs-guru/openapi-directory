from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DepositSwitchTokenCreateRequest:
    request: shared.DepositSwitchTokenCreateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DepositSwitchTokenCreateResponse:
    content_type: str = field()
    status_code: int = field()
    deposit_switch_token_create_response: Optional[dict[str, Any]] = field(default=None)
    
