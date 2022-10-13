from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreatePicturePathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePictureSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePictureRequest:
    path_params: CreatePicturePathParams = field(default=None)
    security: CreatePictureSecurity = field(default=None)
    

@dataclass
class CreatePictureResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
