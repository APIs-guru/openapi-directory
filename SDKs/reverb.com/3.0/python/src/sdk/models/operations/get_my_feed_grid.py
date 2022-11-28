from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyFeedGridSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFeedGridRequest:
    security: GetMyFeedGridSecurity = field()
    

@dataclass
class GetMyFeedGridResponse:
    content_type: str = field()
    status_code: int = field()
    
