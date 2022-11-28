from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostScrobbleEpisodesRequestBody:
    episode_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episode_id') }})
    marked_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marked_at') }})
    type: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class PostScrobbleEpisodesRequest:
    request: Optional[List[PostScrobbleEpisodesRequestBody]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostScrobbleEpisodesResponse:
    content_type: str = field()
    status_code: int = field()
    bulk_response: Optional[List[Any]] = field(default=None)
    
