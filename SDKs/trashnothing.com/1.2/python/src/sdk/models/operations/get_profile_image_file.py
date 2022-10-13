from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetProfileImageFilePathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProfileImageFileQueryParams:
    default: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'default', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProfileImageFileRequest:
    path_params: GetProfileImageFilePathParams = field(default=None)
    query_params: GetProfileImageFileQueryParams = field(default=None)
    

@dataclass
class GetProfileImageFileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
