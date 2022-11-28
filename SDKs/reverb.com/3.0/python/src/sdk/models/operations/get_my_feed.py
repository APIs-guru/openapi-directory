from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyFeedSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFeedRequest:
    security: GetMyFeedSecurity = field()
    

@dataclass
class GetMyFeedResponse:
    content_type: str = field()
    status_code: int = field()
    
