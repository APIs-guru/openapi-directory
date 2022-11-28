from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DepositSwitchCreateRequest:
    request: shared.DepositSwitchCreateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DepositSwitchCreateResponse:
    content_type: str = field()
    status_code: int = field()
    deposit_switch_create_response: Optional[dict[str, Any]] = field(default=None)
    
