from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SongListForAPIContractFeaturedCategoryEnum(str, Enum):
    NOTHING = "Nothing"
    CONCERTS = "Concerts"
    VOCALOID_RANKING = "VocaloidRanking"
    POOLS = "Pools"
    OTHER = "Other"

class SongListForAPIContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class SongListForAPIContract:
    author: Optional[UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    event_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    events: Optional[List[ReleaseEventForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    featured_category: Optional[SongListForAPIContractFeaturedCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featuredCategory') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latest_comments: Optional[List[CommentForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestComments') }})
    main_picture: Optional[EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPicture') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[SongListForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[TagUsageForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
