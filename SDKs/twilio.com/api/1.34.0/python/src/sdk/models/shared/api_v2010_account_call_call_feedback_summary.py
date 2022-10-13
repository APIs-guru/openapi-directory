from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class APIV2010AccountCallCallFeedbackSummary:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    call_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_count' }})
    call_feedback_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_feedback_count' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    include_subaccounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_subaccounts' }})
    issues: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues' }})
    quality_score_average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality_score_average' }})
    quality_score_median: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality_score_median' }})
    quality_score_standard_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality_score_standard_deviation' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared.CallFeedbackSummaryEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
