from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUsersRequest:
    request: shared.User = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUsersResponse:
    content_type: str = field()
    status_code: int = field()
    user: Optional[shared.User] = field(default=None)
    
