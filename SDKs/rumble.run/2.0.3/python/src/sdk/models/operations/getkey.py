from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetKeySecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetKeyRequest:
    security: GetKeySecurity = field()
    

@dataclass
class GetKeyResponse:
    content_type: str = field()
    status_code: int = field()
    api_key: Optional[shared.APIKey] = field(default=None)
    
