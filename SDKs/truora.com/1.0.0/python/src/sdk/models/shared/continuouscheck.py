from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import continuouscheckentry
from . import check

class ContinuousCheckContinuousCheckStatusEnum(str, Enum):
    NEW = "new"
    UP = "up"
    DOWN = "down"
    SAME = "same"


@dataclass_json
@dataclass
class ContinuousCheck:
    continuous_check_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContinuousCheckID' }})
    continuous_check_status: ContinuousCheckContinuousCheckStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContinuousCheckStatus' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    frequency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Frequency' }})
    history: Optional[continuouscheckentry.ContinuousCheckEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'History' }})
    last_check_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastCheckID' }})
    next_run_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextRunDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    original_check: Optional[check.Check] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OriginalCheck' }})
    update_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
