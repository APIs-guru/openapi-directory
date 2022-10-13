from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recommendationseedobject
from . import trackobject


@dataclass_json
@dataclass
class RecommendationsObject:
    seeds: Optional[List[recommendationseedobject.RecommendationSeedObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seeds' }})
    tracks: Optional[List[trackobject.TrackObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracks' }})
    
