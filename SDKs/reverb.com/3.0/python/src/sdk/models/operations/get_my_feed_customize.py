from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyFeedCustomizeSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFeedCustomizeRequest:
    security: GetMyFeedCustomizeSecurity = field()
    

@dataclass
class GetMyFeedCustomizeResponse:
    content_type: str = field()
    status_code: int = field()
    
