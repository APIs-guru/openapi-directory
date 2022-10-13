from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateCloudEnvironmentBody:
    auto_shutdown_delay_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoShutdownDelayMinutes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendlyName' }})
    plan_access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planAccessToken' }})
    plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planId' }})
    sku_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skuName' }})
    
