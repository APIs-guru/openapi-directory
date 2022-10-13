from dataclasses import dataclass, field



@dataclass
class DeleteUserTagsTagIDPathParams:
    tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserTagsTagIDRequest:
    path_params: DeleteUserTagsTagIDPathParams = field(default=None)
    

@dataclass
class DeleteUserTagsTagIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
