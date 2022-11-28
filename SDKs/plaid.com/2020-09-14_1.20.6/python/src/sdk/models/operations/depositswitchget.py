from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DepositSwitchGetRequest:
    request: shared.DepositSwitchGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DepositSwitchGetResponse:
    content_type: str = field()
    status_code: int = field()
    deposit_switch_get_response: Optional[dict[str, Any]] = field(default=None)
    
