from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateGroupRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class CreateGroupSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateGroupRequest:
    request: CreateGroupRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.group+json' }})
    security: CreateGroupSecurity = field(default=None)
    

@dataclass
class CreateGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
