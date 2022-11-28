from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetMyOrdersAwaitingFeedbackSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyOrdersAwaitingFeedbackRequest:
    security: GetMyOrdersAwaitingFeedbackSecurity = field()
    

@dataclass
class GetMyOrdersAwaitingFeedbackResponse:
    content_type: str = field()
    status_code: int = field()
    
