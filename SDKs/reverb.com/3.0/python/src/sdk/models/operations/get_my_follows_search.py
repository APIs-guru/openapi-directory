from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyFollowsSearchSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsSearchRequest:
    security: GetMyFollowsSearchSecurity = field()
    

@dataclass
class GetMyFollowsSearchResponse:
    content_type: str = field()
    status_code: int = field()
    
