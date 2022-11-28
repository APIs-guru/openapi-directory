from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EditPictureAlt1PathParams:
    portraitset_id: float = field(metadata={'path_param': { 'field_name': 'portraitset_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EditPictureAlt1RequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    

@dataclass
class EditPictureAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EditPictureAlt1Request:
    path_params: EditPictureAlt1PathParams = field()
    security: EditPictureAlt1Security = field()
    request: Optional[EditPictureAlt1RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.picture+json' }})
    

@dataclass
class EditPictureAlt1Response:
    content_type: str = field()
    status_code: int = field()
    picture: Optional[shared.Picture] = field(default=None)
    
