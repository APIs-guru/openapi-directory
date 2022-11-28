from dataclasses import dataclass, field



@dataclass
class DeleteUserTagsTagIDPathParams:
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserTagsTagIDRequest:
    path_params: DeleteUserTagsTagIDPathParams = field()
    

@dataclass
class DeleteUserTagsTagIDResponse:
    content_type: str = field()
    status_code: int = field()
    
