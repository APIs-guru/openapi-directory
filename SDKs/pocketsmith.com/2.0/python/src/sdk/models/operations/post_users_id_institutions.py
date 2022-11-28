from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostUsersIDInstitutionsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostUsersIDInstitutionsRequestBody:
    currency_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_code') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass
class PostUsersIDInstitutionsRequest:
    path_params: PostUsersIDInstitutionsPathParams = field()
    request: Optional[PostUsersIDInstitutionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUsersIDInstitutionsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    institution: Optional[shared.Institution] = field(default=None)
    
