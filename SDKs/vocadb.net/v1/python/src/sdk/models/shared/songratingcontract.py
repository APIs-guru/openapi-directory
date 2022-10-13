from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SongRatingContractRatingEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"


@dataclass_json
@dataclass
class SongRatingContract:
    rating: Optional[SongRatingContractRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }, 'form': { 'field_name': 'rating' }})
    
