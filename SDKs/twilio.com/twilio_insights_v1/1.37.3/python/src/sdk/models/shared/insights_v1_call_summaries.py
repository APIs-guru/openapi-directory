from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InsightsV1CallSummaries:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    answered_by: Optional[CallSummariesEnumAnsweredByEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answered_by') }})
    attributes: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    call_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_sid') }})
    call_state: Optional[CallSummariesEnumCallStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_state') }})
    call_type: Optional[CallSummariesEnumCallTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_type') }})
    carrier_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_edge') }})
    client_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_edge') }})
    connect_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_duration') }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    from_: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    processing_state: Optional[CallSummariesEnumProcessingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processing_state') }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    sdk_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdk_edge') }})
    sip_edge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sip_edge') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    to: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    trust: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trust') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
