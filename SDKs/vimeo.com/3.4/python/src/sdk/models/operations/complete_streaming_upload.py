from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompleteStreamingUploadPathParams:
    upload: float = field(metadata={'path_param': { 'field_name': 'upload', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteStreamingUploadQueryParams:
    signature: str = field(metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    video_file_id: float = field(metadata={'query_param': { 'field_name': 'video_file_id', 'style': 'form', 'explode': True }})
    

@dataclass
class CompleteStreamingUploadSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CompleteStreamingUploadRequest:
    path_params: CompleteStreamingUploadPathParams = field()
    query_params: CompleteStreamingUploadQueryParams = field()
    security: CompleteStreamingUploadSecurity = field()
    

@dataclass
class CompleteStreamingUploadResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
