from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RevokeTokenSecurity:
    oauth2_client_secret: shared.SchemeOauth2ClientSecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RevokeTokenRequest:
    request: shared.RevokeTokenRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RevokeTokenSecurity = field(default=None)
    

@dataclass
class RevokeTokenResponse:
    content_type: str = field(default=None)
    revoke_token_response: Optional[shared.RevokeTokenResponse] = field(default=None)
    status_code: int = field(default=None)
    
