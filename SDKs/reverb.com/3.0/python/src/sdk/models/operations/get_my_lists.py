from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyListsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyListsRequest:
    security: GetMyListsSecurity = field()
    

@dataclass
class GetMyListsResponse:
    content_type: str = field()
    status_code: int = field()
    
