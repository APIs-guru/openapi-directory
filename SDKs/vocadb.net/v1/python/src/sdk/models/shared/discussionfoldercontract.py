from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import userforapicontract


@dataclass_json
@dataclass
class DiscussionFolderContract:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_topic_author: Optional[userforapicontract.UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastTopicAuthor' }})
    last_topic_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastTopicDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    topic_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicCount' }})
    
