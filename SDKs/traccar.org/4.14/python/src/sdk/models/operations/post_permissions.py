from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPermissionsRequest:
    request: shared.Permission = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    permission: Optional[shared.Permission] = field(default=None)
    
