from dataclasses import dataclass, field



@dataclass
class DeleteUserVotesShowsShowIDPathParams:
    show_id: int = field(default=None, metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserVotesShowsShowIDRequest:
    path_params: DeleteUserVotesShowsShowIDPathParams = field(default=None)
    

@dataclass
class DeleteUserVotesShowsShowIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
