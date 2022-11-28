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
class ContinuousCheckEntry:
    r"""ContinuousCheckEntry
    Represents to changelog entry of a continuous check
    """
    
    changes: Optional[List[Change]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changes') }})
    check_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_id') }})
    continuous_check_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuous_check_id') }})
    creation_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creation_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    previous_check_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_check_id') }})
    
