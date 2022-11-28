from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PoolStatusResponseBody:
    all_with_latest_version: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allWithLatestVersion') }})
    is_environment_pool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnvironmentPool') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    pool_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poolCode') }})
    ready_unassigned_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readyUnassignedCount') }})
    ready_unassigned_latest_version_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readyUnassignedLatestVersionCount') }})
    ready_unassigned_not_latest_version_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readyUnassignedNotLatestVersionCount') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    
