from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RefreshProfileTelemetryPropertiesRequest:
    partner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partner') }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantId') }})
    user_ids: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userIds') }})
    
