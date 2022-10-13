from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DepositSwitchAltCreateRequest:
    request: shared.DepositSwitchAltCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DepositSwitchAltCreateResponse:
    content_type: str = field(default=None)
    deposit_switch_alt_create_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
