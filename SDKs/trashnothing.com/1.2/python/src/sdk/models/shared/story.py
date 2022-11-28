from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Story:
    r"""Story
    A user story
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    like_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('like_count') }})
    photos: Optional[List[Photo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photos') }})
    share_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('share_url') }})
    story_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('story_id') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    user_liked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_liked') }})
    
