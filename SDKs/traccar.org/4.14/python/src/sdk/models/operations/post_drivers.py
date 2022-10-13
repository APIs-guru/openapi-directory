from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostDriversRequest:
    request: shared.Driver = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostDriversResponse:
    content_type: str = field(default=None)
    driver: Optional[shared.Driver] = field(default=None)
    status_code: int = field(default=None)
    
