from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import photo
from . import user


@dataclass_json
@dataclass
class Story:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    like_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'like_count' }})
    photos: Optional[List[photo.Photo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photos' }})
    share_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'share_url' }})
    story_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'story_id' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    user_liked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_liked' }})
    
