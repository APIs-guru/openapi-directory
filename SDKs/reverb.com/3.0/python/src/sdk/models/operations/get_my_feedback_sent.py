from dataclasses import dataclass, field



@dataclass
class GetMyFeedbackSentSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFeedbackSentRequest:
    security: GetMyFeedbackSentSecurity = field(default=None)
    

@dataclass
class GetMyFeedbackSentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
