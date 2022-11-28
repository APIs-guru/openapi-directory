from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ContinuousCheckContinuousCheckStatusEnum(str, Enum):
    NEW = "new"
    UP = "up"
    DOWN = "down"
    SAME = "same"


@dataclass_json
@dataclass
class ContinuousCheck:
    r"""ContinuousCheck
    Continuous check allows for background checks to be performed on the same people or vehicles periodically and notifies if new information is found. Allowing companies to keep an eye on their workforce or vehicle fleet for any recent wrongdoing they might be involved in.
    """
    
    continuous_check_status: ContinuousCheckContinuousCheckStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContinuousCheckStatus') }})
    frequency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Frequency') }})
    last_check_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastCheckID') }})
    continuous_check_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContinuousCheckID') }})
    creation_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    history: Optional[ContinuousCheckEntry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('History') }})
    next_run_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextRunDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    original_check: Optional[Check] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OriginalCheck') }})
    update_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
