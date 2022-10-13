from dataclasses import dataclass, field



@dataclass
class GetAPIMembersIDThumbnailPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDThumbnailRequest:
    path_params: GetAPIMembersIDThumbnailPathParams = field(default=None)
    

@dataclass
class GetAPIMembersIDThumbnailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
