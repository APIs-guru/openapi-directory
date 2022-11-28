from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EditVodPosterPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    poster_id: float = field(metadata={'path_param': { 'field_name': 'poster_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EditVodPosterRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    

@dataclass
class EditVodPosterSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EditVodPosterRequest:
    path_params: EditVodPosterPathParams = field()
    security: EditVodPosterSecurity = field()
    request: Optional[EditVodPosterRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.picture+json' }})
    

@dataclass
class EditVodPosterResponse:
    content_type: str = field()
    status_code: int = field()
    picture: Optional[shared.Picture] = field(default=None)
    
