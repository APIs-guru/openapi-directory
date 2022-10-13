from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LearningCurve:
    epoch: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'epoch' }})
    epoch_results: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'epochResults' }})
    metrics_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricsData' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    
