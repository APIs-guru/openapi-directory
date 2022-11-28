from dataclasses import dataclass, field



@dataclass
class GetAPIMembersIDThumbnailPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDThumbnailRequest:
    path_params: GetAPIMembersIDThumbnailPathParams = field()
    

@dataclass
class GetAPIMembersIDThumbnailResponse:
    content_type: str = field()
    status_code: int = field()
    
