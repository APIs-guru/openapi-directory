from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecommendationsObject:
    r"""RecommendationsObject

    https://developer.spotify.com/documentation/web-api/reference/#object-recommendationsobject - Find more info on the official Spotify Web API Reference
    """
    
    seeds: Optional[List[RecommendationSeedObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seeds') }})
    tracks: Optional[List[TrackObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracks') }})
    
