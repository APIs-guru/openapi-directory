from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUploadAttemptPathParams:
    upload: float = field(metadata={'path_param': { 'field_name': 'upload', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUploadAttemptSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUploadAttemptRequest:
    path_params: GetUploadAttemptPathParams = field()
    security: GetUploadAttemptSecurity = field()
    

@dataclass
class GetUploadAttemptResponse:
    content_type: str = field()
    status_code: int = field()
    upload_attempt: Optional[shared.UploadAttempt] = field(default=None)
    
