from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyFeedbackReceivedSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFeedbackReceivedRequest:
    security: GetMyFeedbackReceivedSecurity = field()
    

@dataclass
class GetMyFeedbackReceivedResponse:
    content_type: str = field()
    status_code: int = field()
    
