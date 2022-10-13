from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RenewTokenPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RenewTokenSecurity:
    oauth2_client_secret: shared.SchemeOauth2ClientSecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RenewTokenRequest:
    path_params: RenewTokenPathParams = field(default=None)
    request: shared.RenewTokenRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RenewTokenSecurity = field(default=None)
    

@dataclass
class RenewTokenResponse:
    content_type: str = field(default=None)
    renew_token_response: Optional[shared.RenewTokenResponse] = field(default=None)
    status_code: int = field(default=None)
    
