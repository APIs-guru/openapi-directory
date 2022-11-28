from dataclasses import dataclass, field



@dataclass
class PostMyFollowsFollowIDAlertPathParams:
    follow_id: str = field(metadata={'path_param': { 'field_name': 'follow_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyFollowsFollowIDAlertRequest:
    path_params: PostMyFollowsFollowIDAlertPathParams = field()
    

@dataclass
class PostMyFollowsFollowIDAlertResponse:
    content_type: str = field()
    status_code: int = field()
    
