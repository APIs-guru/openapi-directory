from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateMobileAuthorizationCodeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateMobileAuthorizationCodeRequest:
    request: shared.CreateMobileAuthorizationCodeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateMobileAuthorizationCodeSecurity = field(default=None)
    

@dataclass
class CreateMobileAuthorizationCodeResponse:
    content_type: str = field(default=None)
    create_mobile_authorization_code_response: Optional[shared.CreateMobileAuthorizationCodeResponse] = field(default=None)
    status_code: int = field(default=None)
    
