from dataclasses import dataclass, field



@dataclass
class GetMyFeedbackReceivedSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFeedbackReceivedRequest:
    security: GetMyFeedbackReceivedSecurity = field(default=None)
    

@dataclass
class GetMyFeedbackReceivedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
