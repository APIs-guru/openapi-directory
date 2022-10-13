from dataclasses import dataclass, field



@dataclass
class GetMyFeedCustomizeSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFeedCustomizeRequest:
    security: GetMyFeedCustomizeSecurity = field(default=None)
    

@dataclass
class GetMyFeedCustomizeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
