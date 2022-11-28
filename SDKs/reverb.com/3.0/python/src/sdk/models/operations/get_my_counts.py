from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyCountsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyCountsRequest:
    security: GetMyCountsSecurity = field()
    

@dataclass
class GetMyCountsResponse:
    content_type: str = field()
    status_code: int = field()
    
