from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RotateKeySecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RotateKeyRequest:
    security: RotateKeySecurity = field(default=None)
    

@dataclass
class RotateKeyResponse:
    api_key: Optional[shared.APIKey] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
