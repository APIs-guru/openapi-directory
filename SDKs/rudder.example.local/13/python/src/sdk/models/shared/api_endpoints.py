from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIEndpoints:
    endpoint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointName' }})
    http_verb: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpVerb' }})
    
