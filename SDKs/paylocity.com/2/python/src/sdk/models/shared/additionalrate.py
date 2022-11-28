from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdditionalRate:
    r"""AdditionalRate
    The additional pay rate model
    """
    
    change_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeReason') }})
    cost_center1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costCenter1') }})
    cost_center2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costCenter2') }})
    cost_center3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costCenter3') }})
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDate') }})
    end_check_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endCheckDate') }})
    job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    rate_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateCode') }})
    rate_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateNotes') }})
    rate_per: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratePer') }})
    shift: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shift') }})
    
