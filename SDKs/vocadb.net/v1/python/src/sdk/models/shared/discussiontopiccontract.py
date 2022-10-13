from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userforapicontract
from . import commentforapicontract
from . import commentforapicontract


@dataclass_json
@dataclass
class DiscussionTopicContract:
    author: Optional[userforapicontract.UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    comment_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentCount' }})
    comments: Optional[List[commentforapicontract.CommentForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    folder_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folderId' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_comment: Optional[commentforapicontract.CommentForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastComment' }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
