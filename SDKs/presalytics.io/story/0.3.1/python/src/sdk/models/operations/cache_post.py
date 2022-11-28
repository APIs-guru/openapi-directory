from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CachePostRequest:
    request: shared.CachePostRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CachePostResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    
