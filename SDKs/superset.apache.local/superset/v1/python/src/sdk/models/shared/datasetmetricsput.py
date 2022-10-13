from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DatasetMetricsPut:
    d3format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'd3format' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expression: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expression' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metric_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric_name' }})
    metric_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric_type' }})
    warning_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warning_text' }})
    
