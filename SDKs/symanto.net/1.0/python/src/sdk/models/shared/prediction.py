from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Prediction:
    prediction: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prediction' }})
    probability: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probability' }})
    
