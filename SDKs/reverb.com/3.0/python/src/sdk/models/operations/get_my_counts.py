from dataclasses import dataclass, field



@dataclass
class GetMyCountsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyCountsRequest:
    security: GetMyCountsSecurity = field(default=None)
    

@dataclass
class GetMyCountsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
