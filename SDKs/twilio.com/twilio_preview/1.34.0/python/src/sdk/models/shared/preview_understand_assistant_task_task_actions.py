from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PreviewUnderstandAssistantTaskTaskActions:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    assistant_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assistant_sid' }})
    data: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    task_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task_sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
