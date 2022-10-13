from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAccountCredentialSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateAccountCredentialRequest:
    request: shared.CredentialOptions = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAccountCredentialSecurity = field(default=None)
    

@dataclass
class CreateAccountCredentialResponse:
    content_type: str = field(default=None)
    credential: Optional[shared.Credential] = field(default=None)
    status_code: int = field(default=None)
    
