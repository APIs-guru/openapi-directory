from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostAdminSettingsRequestBody:
    fixed_delay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedDelay') }})
    

@dataclass
class PostAdminSettingsRequest:
    request: PostAdminSettingsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAdminSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    
