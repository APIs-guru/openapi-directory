from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HealthCheckHealthCheckHealthCheck:
    info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Info' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    

@dataclass_json
@dataclass
class HealthCheck:
    health_check: Optional[HealthCheckHealthCheckHealthCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheck' }})
    
