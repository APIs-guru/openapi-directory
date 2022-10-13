from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import userforapicontract
from . import releaseeventforapicontract
from . import commentforapicontract
from . import entrythumbforapicontract
from . import tagusageforapicontract

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
    author: Optional[userforapicontract.UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    event_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    events: Optional[List[releaseeventforapicontract.ReleaseEventForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    featured_category: Optional[SongListForAPIContractFeaturedCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featuredCategory' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    latest_comments: Optional[List[commentforapicontract.CommentForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestComments' }})
    main_picture: Optional[entrythumbforapicontract.EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainPicture' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[SongListForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[tagusageforapicontract.TagUsageForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
