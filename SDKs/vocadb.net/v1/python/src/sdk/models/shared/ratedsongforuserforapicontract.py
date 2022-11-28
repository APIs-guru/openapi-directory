from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RatedSongForUserForAPIContractRatingEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"


@dataclass_json
@dataclass
class RatedSongForUserForAPIContract:
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rating: Optional[RatedSongForUserForAPIContractRatingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    song: Optional[SongForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('song') }})
    user: Optional[UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
