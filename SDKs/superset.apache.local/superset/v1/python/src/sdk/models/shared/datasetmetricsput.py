from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DatasetMetricsPut:
    expression: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    metric_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric_name') }})
    d3format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('d3format') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metric_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric_type') }})
    warning_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warning_text') }})
    
