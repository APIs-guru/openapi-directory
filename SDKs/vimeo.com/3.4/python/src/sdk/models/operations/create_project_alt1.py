from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreateProjectAlt1RequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class CreateProjectAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateProjectAlt1Request:
    request: CreateProjectAlt1RequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateProjectAlt1Security = field()
    

@dataclass
class CreateProjectAlt1Response:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    project: Optional[shared.Project] = field(default=None)
    
