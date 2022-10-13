from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AccountsBalanceGetRequest:
    request: shared.AccountsBalanceGetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AccountsBalanceGetResponse:
    accounts_get_response: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
