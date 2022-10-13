from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResumePointObject:
    fully_played: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fully_played' }})
    resume_position_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resume_position_ms' }})
    
