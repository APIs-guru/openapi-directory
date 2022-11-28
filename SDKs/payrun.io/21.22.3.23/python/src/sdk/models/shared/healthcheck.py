from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HealthCheckHealthCheck:
    info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Info') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    

@dataclass_json
@dataclass
class HealthCheck:
    health_check: Optional[HealthCheckHealthCheck] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheck') }})
    
