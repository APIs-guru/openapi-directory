from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutServerRequest:
    request: shared.Server = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutServerResponse:
    content_type: str = field()
    status_code: int = field()
    server: Optional[shared.Server] = field(default=None)
    
