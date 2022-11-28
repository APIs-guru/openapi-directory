from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SongRatingContractRatingEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"


@dataclass_json
@dataclass
class SongRatingContract:
    rating: Optional[SongRatingContractRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }, 'form': { 'field_name': 'rating' }})
    
