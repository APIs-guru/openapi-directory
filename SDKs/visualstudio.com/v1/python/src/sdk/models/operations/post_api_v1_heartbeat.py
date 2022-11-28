from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostAPIV1HeartBeatRequests:
    heart_beat_body: Optional[shared.HeartBeatBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    heart_beat_body1: Optional[shared.HeartBeatBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    heart_beat_body2: Optional[shared.HeartBeatBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    heart_beat_body3: Optional[shared.HeartBeatBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPIV1HeartBeatRequest:
    request: Optional[PostAPIV1HeartBeatRequests] = field(default=None)
    

@dataclass
class PostAPIV1HeartBeatResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
