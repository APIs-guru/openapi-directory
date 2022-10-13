from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompleteStreamingUploadPathParams:
    upload: float = field(default=None, metadata={'path_param': { 'field_name': 'upload', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteStreamingUploadQueryParams:
    signature: str = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    video_file_id: float = field(default=None, metadata={'query_param': { 'field_name': 'video_file_id', 'style': 'form', 'explode': True }})
    

@dataclass
class CompleteStreamingUploadSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CompleteStreamingUploadRequest:
    path_params: CompleteStreamingUploadPathParams = field(default=None)
    query_params: CompleteStreamingUploadQueryParams = field(default=None)
    security: CompleteStreamingUploadSecurity = field(default=None)
    

@dataclass
class CompleteStreamingUploadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
