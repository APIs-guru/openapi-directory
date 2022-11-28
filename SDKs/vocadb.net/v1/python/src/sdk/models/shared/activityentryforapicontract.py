from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ActivityEntryForAPIContractEditEventEnum(str, Enum):
    CREATED = "Created"
    UPDATED = "Updated"
    DELETED = "Deleted"
    RESTORED = "Restored"


@dataclass_json
@dataclass
class ActivityEntryForAPIContract:
    archived_version: Optional[ArchivedObjectVersionForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archivedVersion') }})
    author: Optional[UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    edit_event: Optional[ActivityEntryForAPIContractEditEventEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editEvent') }})
    entry: Optional[EntryForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry') }})
    
