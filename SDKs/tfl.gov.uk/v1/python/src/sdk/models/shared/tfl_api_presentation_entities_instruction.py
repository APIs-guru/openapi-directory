from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_instructionstep


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesInstruction:
    detailed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailed' }})
    steps: Optional[List[tfl_api_presentation_entities_instructionstep.TflAPIPresentationEntitiesInstructionStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
