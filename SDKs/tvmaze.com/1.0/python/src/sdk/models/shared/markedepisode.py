from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MarkedEpisodeEmbedded:
    episode: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episode' }})
    

@dataclass_json
@dataclass
class MarkedEpisode:
    embedded: Optional[MarkedEpisodeEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    episode_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episode_id' }})
    marked_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marked_at' }})
    type: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
