from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class TrunkingV1TrunkRecording:
    mode: Optional[shared.RecordingEnumRecordingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    trim: Optional[shared.RecordingEnumRecordingTrimEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trim' }})
    
