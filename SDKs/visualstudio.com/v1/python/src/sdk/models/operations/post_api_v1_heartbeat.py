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
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
