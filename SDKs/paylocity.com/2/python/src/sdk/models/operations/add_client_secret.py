from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddClientSecretSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddClientSecretRequest:
    request: shared.AddClientSecret = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddClientSecretSecurity = field(default=None)
    

@dataclass
class AddClientSecretResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    client_credentials_responses: Optional[List[shared.ClientCredentialsResponse]] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
