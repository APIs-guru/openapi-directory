from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import songforapicontract
from . import userforapicontract

class RatedSongForUserForAPIContractRatingEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"


@dataclass_json
@dataclass
class RatedSongForUserForAPIContract:
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rating: Optional[RatedSongForUserForAPIContractRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    song: Optional[songforapicontract.SongForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'song' }})
    user: Optional[userforapicontract.UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
