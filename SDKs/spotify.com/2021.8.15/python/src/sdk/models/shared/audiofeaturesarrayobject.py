from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import audiofeaturesobject


@dataclass_json
@dataclass
class AudioFeaturesArrayObject:
    audio_features: Optional[List[audiofeaturesobject.AudioFeaturesObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_features' }})
    
