from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreatePicturePathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePictureSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePictureRequest:
    path_params: CreatePicturePathParams = field()
    security: CreatePictureSecurity = field()
    

@dataclass
class CreatePictureResponse:
    content_type: str = field()
    status_code: int = field()
    picture: Optional[shared.Picture] = field(default=None)
    
