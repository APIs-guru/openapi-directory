from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostCommandsSendRequest:
    request: shared.Command = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCommandsSendResponse:
    command: Optional[shared.Command] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
