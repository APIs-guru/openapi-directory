from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import learningcurve


@dataclass_json
@dataclass
class LearningCurveList:
    data: Optional[List[learningcurve.LearningCurve]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    
