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
class ShowLinks:
    personas: Optional[List[Link]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personas') }})
    playlists: Optional[Link] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playlists') }})
    self: Optional[Link] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class Show:
    r"""Show
    A `Show` object describes one occurrence of a radio program. A result set may contain multiple occurrences of the same show with difference `start` and `end` values.
    """
    
    links: Optional[ShowLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hide_dj: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hide_dj') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    one_off: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('one_off') }})
    since: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('since') }})
    start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
