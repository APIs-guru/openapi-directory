from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StudioV1FlowExecutionExecutionContext:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    context: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    execution_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'execution_sid' }})
    flow_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flow_sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
