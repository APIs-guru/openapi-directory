from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import archivedobjectversionforapicontract
from . import userforapicontract
from . import entryforapicontract

class ActivityEntryForAPIContractEditEventEnum(str, Enum):
    CREATED = "Created"
    UPDATED = "Updated"
    DELETED = "Deleted"
    RESTORED = "Restored"


@dataclass_json
@dataclass
class ActivityEntryForAPIContract:
    archived_version: Optional[archivedobjectversionforapicontract.ArchivedObjectVersionForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archivedVersion' }})
    author: Optional[userforapicontract.UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    edit_event: Optional[ActivityEntryForAPIContractEditEventEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editEvent' }})
    entry: Optional[entryforapicontract.EntryForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry' }})
    
