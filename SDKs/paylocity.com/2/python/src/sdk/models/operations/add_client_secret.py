from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddClientSecretSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddClientSecretRequest:
    request: shared.AddClientSecret = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddClientSecretSecurity = field()
    

@dataclass
class AddClientSecretResponse:
    content_type: str = field()
    status_code: int = field()
    client_credentials_responses: Optional[List[shared.ClientCredentialsResponse]] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
