from dataclasses import dataclass, field



@dataclass
class DeleteUserFollowsShowsShowIDPathParams:
    show_id: int = field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserFollowsShowsShowIDRequest:
    path_params: DeleteUserFollowsShowsShowIDPathParams = field()
    

@dataclass
class DeleteUserFollowsShowsShowIDResponse:
    content_type: str = field()
    status_code: int = field()
    
