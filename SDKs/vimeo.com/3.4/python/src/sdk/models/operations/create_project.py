from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateProjectPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateProjectRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class CreateProjectSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateProjectRequest:
    path_params: CreateProjectPathParams = field()
    request: CreateProjectRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateProjectSecurity = field()
    

@dataclass
class CreateProjectResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    project: Optional[shared.Project] = field(default=None)
    
