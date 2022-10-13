from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GraphQlRequest:
    operation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationName' }})
    query: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    variables: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variables' }})
    
