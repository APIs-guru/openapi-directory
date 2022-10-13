from dataclasses import dataclass, field



@dataclass
class DeleteMyFollowsFollowIDAlertPathParams:
    follow_id: str = field(default=None, metadata={'path_param': { 'field_name': 'follow_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyFollowsFollowIDAlertRequest:
    path_params: DeleteMyFollowsFollowIDAlertPathParams = field(default=None)
    

@dataclass
class DeleteMyFollowsFollowIDAlertResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
