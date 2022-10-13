from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAdminSettingsRequestBody:
    fixed_delay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedDelay' }})
    

@dataclass
class PostAdminSettingsRequest:
    request: PostAdminSettingsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAdminSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
