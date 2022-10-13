from dataclasses import dataclass, field



@dataclass
class GetMyFollowsSearchSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMyFollowsSearchRequest:
    security: GetMyFollowsSearchSecurity = field(default=None)
    

@dataclass
class GetMyFollowsSearchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
