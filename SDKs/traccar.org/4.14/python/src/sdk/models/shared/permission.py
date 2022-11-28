from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Permission:
    r"""Permission
    This is a permission map that contain two object indexes. It is used to link/unlink objects. Order is important. Example: { deviceId:8, geofenceId: 16 }
    """
    
    attribute_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeId') }})
    calendar_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendarId') }})
    device_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    driver_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driverId') }})
    geofence_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geofenceId') }})
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    managed_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedUserId') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
