from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DatabaseValidateParametersSchema:
    configuration_method: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration_method' }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database_name' }})
    encrypted_extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encrypted_extra' }})
    engine: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engine' }})
    extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extra' }})
    impersonate_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impersonate_user' }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    server_cert: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_cert' }})
    
