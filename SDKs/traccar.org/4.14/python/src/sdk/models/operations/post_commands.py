from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostCommandsRequest:
    request: shared.Command = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCommandsResponse:
    content_type: str = field()
    status_code: int = field()
    command: Optional[shared.Command] = field(default=None)
    
