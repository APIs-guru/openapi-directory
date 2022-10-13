from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import episodeobject


@dataclass_json
@dataclass
class EpisodesObject:
    episodes: Optional[List[episodeobject.EpisodeObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episodes' }})
    
