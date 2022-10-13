from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CachePostRequest:
    request: shared.CachePostRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CachePostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
