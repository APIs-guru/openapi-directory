from dataclasses import dataclass, field



@dataclass
class PostMyFollowsFollowIDAlertPathParams:
    follow_id: str = field(default=None, metadata={'path_param': { 'field_name': 'follow_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsFollowIDAlertRequest:
    path_params: PostMyFollowsFollowIDAlertPathParams = field(default=None)
    

@dataclass
class PostMyFollowsFollowIDAlertResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
