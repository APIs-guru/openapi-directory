from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPermissionsRequest:
    request: shared.Permission = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPermissionsResponse:
    content_type: str = field(default=None)
    permission: Optional[shared.Permission] = field(default=None)
    status_code: int = field(default=None)
    
