from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Youtube:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel_id') }})
    channel_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel_title') }})
    comments_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments_count') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dislike_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dislike_count') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_id') }})
    favorite_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favorite_count') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    like_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('like_count') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    thumbnails: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnails') }})
    view_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view_count') }})
    
