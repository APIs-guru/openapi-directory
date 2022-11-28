from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyFollowsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsRequest:
    security: GetMyFollowsSecurity = field()
    

@dataclass
class GetMyFollowsResponse:
    content_type: str = field()
    status_code: int = field()
    
