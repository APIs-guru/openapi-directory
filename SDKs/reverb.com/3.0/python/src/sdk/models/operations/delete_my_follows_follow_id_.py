from dataclasses import dataclass, field



@dataclass
class DeleteMyFollowsFollowIDPathParams:
    follow_id: str = field(default=None, metadata={'path_param': { 'field_name': 'follow_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyFollowsFollowIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMyFollowsFollowIDRequest:
    path_params: DeleteMyFollowsFollowIDPathParams = field(default=None)
    security: DeleteMyFollowsFollowIDSecurity = field(default=None)
    

@dataclass
class DeleteMyFollowsFollowIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
