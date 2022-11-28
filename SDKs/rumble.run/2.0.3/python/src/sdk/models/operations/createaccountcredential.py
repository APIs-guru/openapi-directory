from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAccountCredentialSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateAccountCredentialRequest:
    request: shared.CredentialOptions = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAccountCredentialSecurity = field()
    

@dataclass
class CreateAccountCredentialResponse:
    content_type: str = field()
    status_code: int = field()
    credential: Optional[shared.Credential] = field(default=None)
    
