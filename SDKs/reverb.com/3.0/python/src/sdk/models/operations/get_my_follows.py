from dataclasses import dataclass, field



@dataclass
class GetMyFollowsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsRequest:
    security: GetMyFollowsSecurity = field(default=None)
    

@dataclass
class GetMyFollowsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
