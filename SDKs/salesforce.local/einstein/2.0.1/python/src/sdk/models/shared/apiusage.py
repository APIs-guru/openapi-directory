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
class APIUsage:
    ends_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endsAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    license_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseId') }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationId') }})
    plan_data: Optional[List[PlanData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planData') }})
    predictions_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictionsMax') }})
    predictions_used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictionsUsed') }})
    starts_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startsAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
