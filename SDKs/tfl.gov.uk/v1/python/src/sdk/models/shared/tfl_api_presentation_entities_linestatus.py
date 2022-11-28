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
class TflAPIPresentationEntitiesLineStatus:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disruption: Optional[TflAPIPresentationEntitiesDisruption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruption') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineId') }})
    modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status_severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusSeverity') }})
    status_severity_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusSeverityDescription') }})
    validity_periods: Optional[List[TflAPIPresentationEntitiesValidityPeriod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validityPeriods') }})
    
