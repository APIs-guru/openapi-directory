from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import plandata


@dataclass_json
@dataclass
class APIUsage:
    ends_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endsAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    license_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseId' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationId' }})
    plan_data: Optional[List[plandata.PlanData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planData' }})
    predictions_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictionsMax' }})
    predictions_used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictionsUsed' }})
    starts_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startsAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
