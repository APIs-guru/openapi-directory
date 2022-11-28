from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAccountKeySecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateAccountKeyRequest:
    request: shared.APIKeyOptions = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAccountKeySecurity = field()
    

@dataclass
class CreateAccountKeyResponse:
    content_type: str = field()
    status_code: int = field()
    api_key: Optional[shared.APIKey] = field(default=None)
    
