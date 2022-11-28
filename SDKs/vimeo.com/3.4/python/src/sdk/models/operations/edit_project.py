from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EditProjectPathParams:
    project_id: float = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EditProjectRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class EditProjectSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EditProjectRequest:
    path_params: EditProjectPathParams = field()
    request: EditProjectRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: EditProjectSecurity = field()
    

@dataclass
class EditProjectResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    project: Optional[shared.Project] = field(default=None)
    
