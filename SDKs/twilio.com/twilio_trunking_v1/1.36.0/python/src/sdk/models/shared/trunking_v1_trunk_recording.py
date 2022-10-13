from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import recording_enum_recording_mode_enum
from . import recording_enum_recording_trim_enum


@dataclass_json
@dataclass
class TrunkingV1TrunkRecording:
    mode: Optional[recording_enum_recording_mode_enum.RecordingEnumRecordingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    trim: Optional[recording_enum_recording_trim_enum.RecordingEnumRecordingTrimEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trim' }})
    
