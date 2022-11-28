from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyPayoutsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyPayoutsRequest:
    security: GetMyPayoutsSecurity = field()
    

@dataclass
class GetMyPayoutsResponse:
    content_type: str = field()
    status_code: int = field()
    
