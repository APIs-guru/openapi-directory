from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrderParametersServiceOffering:
    provider_control_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider_control_parameters' }})
    service_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_parameters' }})
    service_plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_plan_id' }})
    
