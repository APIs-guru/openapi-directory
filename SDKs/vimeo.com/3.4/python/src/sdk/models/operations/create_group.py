from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreateGroupRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass
class CreateGroupSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateGroupRequest:
    request: CreateGroupRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.group+json' }})
    security: CreateGroupSecurity = field()
    

@dataclass
class CreateGroupResponse:
    content_type: str = field()
    status_code: int = field()
    group: Optional[shared.Group] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
