from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import call_summaries_enum_call_state_enum
from . import call_summaries_enum_call_type_enum
from . import call_summaries_enum_processing_state_enum


@dataclass_json
@dataclass
class InsightsV1CallSummaries:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    attributes: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    call_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_sid' }})
    call_state: Optional[call_summaries_enum_call_state_enum.CallSummariesEnumCallStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_state' }})
    call_type: Optional[call_summaries_enum_call_type_enum.CallSummariesEnumCallTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_type' }})
    carrier_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier_edge' }})
    client_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_edge' }})
    connect_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connect_duration' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    from_: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    processing_state: Optional[call_summaries_enum_processing_state_enum.CallSummariesEnumProcessingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processing_state' }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    sdk_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdk_edge' }})
    sip_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sip_edge' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    to: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    trust: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trust' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
