from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyFeedbackSentSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFeedbackSentRequest:
    security: GetMyFeedbackSentSecurity = field()
    

@dataclass
class GetMyFeedbackSentResponse:
    content_type: str = field()
    status_code: int = field()
    
