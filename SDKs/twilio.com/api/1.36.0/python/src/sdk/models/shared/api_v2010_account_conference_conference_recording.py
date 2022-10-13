from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import conference_recording_enum_source_enum
from . import conference_recording_enum_status_enum


@dataclass_json
@dataclass
class APIV2010AccountConferenceConferenceRecording:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_version' }})
    call_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_sid' }})
    channels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    conference_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conference_sid' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    encryption_details: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryption_details' }})
    error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_code' }})
    price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    price_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_unit' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    source: Optional[conference_recording_enum_source_enum.ConferenceRecordingEnumSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time' }})
    status: Optional[conference_recording_enum_status_enum.ConferenceRecordingEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
