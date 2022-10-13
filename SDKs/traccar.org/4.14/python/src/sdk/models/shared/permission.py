from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Permission:
    attribute_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeId' }})
    calendar_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarId' }})
    device_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    driver_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driverId' }})
    geofence_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geofenceId' }})
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    managed_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedUserId' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
