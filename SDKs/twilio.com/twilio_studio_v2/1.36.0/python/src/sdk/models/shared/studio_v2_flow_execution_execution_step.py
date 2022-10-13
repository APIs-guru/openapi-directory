from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StudioV2FlowExecutionExecutionStep:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    context: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'execution_sid' }})
    flow_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flow_sid' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    transitioned_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitioned_from' }})
    transitioned_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitioned_to' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
