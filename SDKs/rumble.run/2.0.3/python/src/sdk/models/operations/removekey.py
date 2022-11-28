from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RemoveKeySecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveKeyRequest:
    security: RemoveKeySecurity = field()
    

@dataclass
class RemoveKeyResponse:
    content_type: str = field()
    status_code: int = field()
    
