from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SectionObject:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    key: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    key_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key_confidence' }})
    loudness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loudness' }})
    mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    mode_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode_confidence' }})
    start: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    tempo: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tempo' }})
    tempo_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tempo_confidence' }})
    time_signature: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_signature' }})
    time_signature_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_signature_confidence' }})
    
