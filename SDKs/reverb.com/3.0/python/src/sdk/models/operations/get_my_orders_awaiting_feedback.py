from dataclasses import dataclass, field



@dataclass
class GetMyOrdersAwaitingFeedbackSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyOrdersAwaitingFeedbackRequest:
    security: GetMyOrdersAwaitingFeedbackSecurity = field(default=None)
    

@dataclass
class GetMyOrdersAwaitingFeedbackResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
