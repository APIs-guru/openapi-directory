from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ControllersSystemItemAttributes:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    culled_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'culled_timestamp' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    insights_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insights_id' }})
    last_evaluation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_evaluation' }})
    last_upload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_upload' }})
    os_major: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os_major' }})
    os_minor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os_minor' }})
    os_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os_name' }})
    other_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'other_count' }})
    packages_installed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packages_installed' }})
    packages_updatable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packages_updatable' }})
    rhba_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rhba_count' }})
    rhea_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rhea_count' }})
    rhsa_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rhsa_count' }})
    rhsm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rhsm' }})
    stale: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stale' }})
    stale_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stale_timestamp' }})
    stale_warning_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stale_warning_timestamp' }})
    third_party: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'third_party' }})
    
