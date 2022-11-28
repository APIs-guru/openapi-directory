from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AccountsBalanceGetRequest:
    request: shared.AccountsBalanceGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AccountsBalanceGetResponse:
    content_type: str = field()
    status_code: int = field()
    accounts_get_response: Optional[dict[str, Any]] = field(default=None)
    
