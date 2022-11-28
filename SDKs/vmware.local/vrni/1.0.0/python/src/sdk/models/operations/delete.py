from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteRequest:
    security: DeleteSecurity = field()
    

@dataclass
class DeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
