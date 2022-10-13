from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import prediction


@dataclass_json
@dataclass
class PostPredicted:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    predictions: List[prediction.Prediction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictions' }})
    
