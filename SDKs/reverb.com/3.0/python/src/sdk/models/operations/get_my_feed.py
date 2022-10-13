from dataclasses import dataclass, field



@dataclass
class GetMyFeedSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFeedRequest:
    security: GetMyFeedSecurity = field(default=None)
    

@dataclass
class GetMyFeedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
