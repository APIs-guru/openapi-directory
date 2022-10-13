from dataclasses import dataclass, field



@dataclass
class DeleteUserFollowsShowsShowIDPathParams:
    show_id: int = field(default=None, metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserFollowsShowsShowIDRequest:
    path_params: DeleteUserFollowsShowsShowIDPathParams = field(default=None)
    

@dataclass
class DeleteUserFollowsShowsShowIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
