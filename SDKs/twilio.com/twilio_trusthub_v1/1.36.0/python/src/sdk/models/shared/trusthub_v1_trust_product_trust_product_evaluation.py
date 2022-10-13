from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import trust_product_evaluation_enum_status_enum


@dataclass_json
@dataclass
class TrusthubV1TrustProductTrustProductEvaluation:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    policy_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy_sid' }})
    results: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    status: Optional[trust_product_evaluation_enum_status_enum.TrustProductEvaluationEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    trust_product_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trust_product_sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
