from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import exception


@dataclass_json
@dataclass
class Exception:
    inner_exception: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InnerException' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    stack_trace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackTrace' }})
    
