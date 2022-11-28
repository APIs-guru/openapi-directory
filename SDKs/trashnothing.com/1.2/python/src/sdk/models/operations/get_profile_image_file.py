from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetProfileImageFilePathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProfileImageFileQueryParams:
    default: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'default', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProfileImageFileRequest:
    path_params: GetProfileImageFilePathParams = field()
    query_params: GetProfileImageFileQueryParams = field()
    

@dataclass
class GetProfileImageFileResponse:
    content_type: str = field()
    status_code: int = field()
    
