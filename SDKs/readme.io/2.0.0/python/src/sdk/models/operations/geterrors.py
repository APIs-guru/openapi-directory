from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetErrorsSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetErrorsRequest:
    security: GetErrorsSecurity = field()
    

@dataclass
class GetErrorsResponse:
    content_type: str = field()
    status_code: int = field()
    
