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
class InsightsV1Conference:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    conference_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference_sid') }})
    connect_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_duration_seconds') }})
    create_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    detected_issues: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detected_issues') }})
    duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_seconds') }})
    end_reason: Optional[ConferenceEnumConferenceEndReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_reason') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ended_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ended_by') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendly_name') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    max_concurrent_participants: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_concurrent_participants') }})
    max_participants: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_participants') }})
    mixer_region: Optional[ConferenceEnumRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mixer_region') }})
    mixer_region_requested: Optional[ConferenceEnumRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mixer_region_requested') }})
    processing_state: Optional[ConferenceEnumProcessingStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processing_state') }})
    recording_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recording_enabled') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[ConferenceEnumConferenceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tag_info: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag_info') }})
    tags: Optional[List[ConferenceEnumTagEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    unique_participants: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unique_participants') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
