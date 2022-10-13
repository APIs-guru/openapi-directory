from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SandboxOauthSelectAccountsRequest:
    request: shared.SandboxOauthSelectAccountsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SandboxOauthSelectAccountsResponse:
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    sandbox_oauth_select_accounts_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
