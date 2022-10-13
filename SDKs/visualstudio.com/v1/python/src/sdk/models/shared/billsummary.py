from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import vsoplaninfo
from . import environmentusage


@dataclass_json
@dataclass
class BillSummary:
    bill_generation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billGenerationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_final_bill: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFinalBill' }})
    partition_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionKey' }})
    period_end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodEnd', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    period_start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodStart', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    plan: Optional[vsoplaninfo.VsoPlanInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    plan_is_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planIsDeleted' }})
    usage: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage' }})
    usage_detail: Optional[List[environmentusage.EnvironmentUsage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageDetail' }})
    
