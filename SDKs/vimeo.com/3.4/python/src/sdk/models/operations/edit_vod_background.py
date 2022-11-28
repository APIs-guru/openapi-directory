from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EditVodBackgroundPathParams:
    background_id: float = field(metadata={'path_param': { 'field_name': 'background_id', 'style': 'simple', 'explode': False }})
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EditVodBackgroundRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    

@dataclass
class EditVodBackgroundSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EditVodBackgroundRequest:
    path_params: EditVodBackgroundPathParams = field()
    security: EditVodBackgroundSecurity = field()
    request: Optional[EditVodBackgroundRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.picture+json' }})
    

@dataclass
class EditVodBackgroundResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
