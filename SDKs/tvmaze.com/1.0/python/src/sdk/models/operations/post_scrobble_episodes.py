from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostScrobbleEpisodesRequestBody:
    episode_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episode_id' }})
    marked_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marked_at' }})
    type: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostScrobbleEpisodesRequest:
    request: Optional[List[PostScrobbleEpisodesRequestBody]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostScrobbleEpisodesResponse:
    bulk_response: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
