from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUploadAttemptPathParams:
    upload: float = field(default=None, metadata={'path_param': { 'field_name': 'upload', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUploadAttemptSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUploadAttemptRequest:
    path_params: GetUploadAttemptPathParams = field(default=None)
    security: GetUploadAttemptSecurity = field(default=None)
    

@dataclass
class GetUploadAttemptResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    upload_attempt: Optional[shared.UploadAttempt] = field(default=None)
    
