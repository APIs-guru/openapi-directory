from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetVersionsSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetVersionsRequest:
    security: GetVersionsSecurity = field()
    

@dataclass
class GetVersionsResponse:
    content_type: str = field()
    status_code: int = field()
    
