from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AccountsGetRequest:
    request: shared.AccountsGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AccountsGetResponse:
    content_type: str = field()
    status_code: int = field()
    accounts_get_response: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
