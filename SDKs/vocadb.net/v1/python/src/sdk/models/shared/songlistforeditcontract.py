from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SongListForEditContractFeaturedCategoryEnum(str, Enum):
    NOTHING = "Nothing"
    CONCERTS = "Concerts"
    VOCALOID_RANKING = "VocaloidRanking"
    POOLS = "Pools"
    OTHER = "Other"

class SongListForEditContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class SongListForEditContractInput:
    author: Optional[UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canEdit') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    event_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    featured_category: Optional[SongListForEditContractFeaturedCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featuredCategory') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    song_links: Optional[List[SongInListEditContractInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('songLinks') }})
    status: Optional[SongListForEditContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    thumb: Optional[EntryThumbContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumb') }})
    update_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateNotes') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
