from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RecommendationSeedObject:
    r"""RecommendationSeedObject

    https://developer.spotify.com/documentation/web-api/reference/#object-recommendationseedobject - Find more info on the official Spotify Web API Reference
    """
    
    after_filtering_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('afterFilteringSize') }})
    after_relinking_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('afterRelinkingSize') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    initial_pool_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialPoolSize') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
