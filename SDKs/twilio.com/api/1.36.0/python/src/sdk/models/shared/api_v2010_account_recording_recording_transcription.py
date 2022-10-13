from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import recording_transcription_enum_status_enum


@dataclass_json
@dataclass
class APIV2010AccountRecordingRecordingTranscription:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_version' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    price_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_unit' }})
    recording_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recording_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    status: Optional[recording_transcription_enum_status_enum.RecordingTranscriptionEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    transcription_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcription_text' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
