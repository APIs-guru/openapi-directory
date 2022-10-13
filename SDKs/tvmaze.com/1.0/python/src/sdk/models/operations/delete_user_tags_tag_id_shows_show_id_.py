from dataclasses import dataclass, field



@dataclass
class DeleteUserTagsTagIDShowsShowIDPathParams:
    show_id: int = field(default=None, metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserTagsTagIDShowsShowIDRequest:
    path_params: DeleteUserTagsTagIDShowsShowIDPathParams = field(default=None)
    

@dataclass
class DeleteUserTagsTagIDShowsShowIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
