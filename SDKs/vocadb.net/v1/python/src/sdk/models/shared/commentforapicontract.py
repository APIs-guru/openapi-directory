from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import userforapicontract
from . import entryrefcontract


@dataclass_json
@dataclass
class CommentForAPIContract:
    author: Optional[userforapicontract.UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    author_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorName' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    entry: Optional[entryrefcontract.EntryRefContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
