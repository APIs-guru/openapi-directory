from dataclasses import dataclass, field



@dataclass
class GetMyFeedGridSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFeedGridRequest:
    security: GetMyFeedGridSecurity = field(default=None)
    

@dataclass
class GetMyFeedGridResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
