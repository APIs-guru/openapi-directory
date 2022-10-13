from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RefreshProfileTelemetryPropertiesRequest:
    partner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partner' }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantId' }})
    user_ids: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userIds' }})
    
