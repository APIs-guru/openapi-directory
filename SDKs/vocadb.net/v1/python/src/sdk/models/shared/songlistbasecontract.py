from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SongListBaseContractFeaturedCategoryEnum(str, Enum):
    NOTHING = "Nothing"
    CONCERTS = "Concerts"
    VOCALOID_RANKING = "VocaloidRanking"
    POOLS = "Pools"
    OTHER = "Other"


@dataclass_json
@dataclass
class SongListBaseContract:
    featured_category: Optional[SongListBaseContractFeaturedCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featuredCategory') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
