from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventFilter:
    continuation_token: Optional[PagedResultsPublicContinuationToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuationToken') }})
    event_status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventStatusCode') }})
    max_creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxCreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    min_creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minCreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    modified_since: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedSince'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamId') }})
    text_to_search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textToSearch') }})
    
