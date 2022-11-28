from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetWantsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetWantsRequest:
    security: GetWantsSecurity = field()
    

@dataclass
class GetWantsResponse:
    content_type: str = field()
    status_code: int = field()
    
