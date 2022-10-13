from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PreviewUnderstandAssistantTaskTaskStatistics:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    assistant_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assistant_sid' }})
    fields_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields_count' }})
    samples_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samples_count' }})
    task_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task_sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
