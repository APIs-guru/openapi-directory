from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SandboxOauthSelectAccountsRequest:
    request: shared.SandboxOauthSelectAccountsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SandboxOauthSelectAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    sandbox_oauth_select_accounts_response: Optional[dict[str, Any]] = field(default=None)
    
