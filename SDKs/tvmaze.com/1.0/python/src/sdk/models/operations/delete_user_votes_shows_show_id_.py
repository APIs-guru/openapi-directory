from dataclasses import dataclass, field



@dataclass
class DeleteUserVotesShowsShowIDPathParams:
    show_id: int = field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserVotesShowsShowIDRequest:
    path_params: DeleteUserVotesShowsShowIDPathParams = field()
    

@dataclass
class DeleteUserVotesShowsShowIDResponse:
    content_type: str = field()
    status_code: int = field()
    
