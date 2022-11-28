from dataclasses import dataclass, field



@dataclass
class DeleteUserTagsTagIDShowsShowIDPathParams:
    show_id: int = field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserTagsTagIDShowsShowIDRequest:
    path_params: DeleteUserTagsTagIDShowsShowIDPathParams = field()
    

@dataclass
class DeleteUserTagsTagIDShowsShowIDResponse:
    content_type: str = field()
    status_code: int = field()
    
