from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EditPicturePathParams:
    portraitset_id: float = field(default=None, metadata={'path_param': { 'field_name': 'portraitset_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EditPictureRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    

@dataclass
class EditPictureSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EditPictureRequest:
    path_params: EditPicturePathParams = field(default=None)
    request: Optional[EditPictureRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.picture+json' }})
    security: EditPictureSecurity = field(default=None)
    

@dataclass
class EditPictureResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
