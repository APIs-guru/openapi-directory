from dataclasses import dataclass, field



@dataclass
class DeleteMyFollowsFollowIDAlertPathParams:
    follow_id: str = field(metadata={'path_param': { 'field_name': 'follow_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyFollowsFollowIDAlertRequest:
    path_params: DeleteMyFollowsFollowIDAlertPathParams = field()
    

@dataclass
class DeleteMyFollowsFollowIDAlertResponse:
    content_type: str = field()
    status_code: int = field()
    
