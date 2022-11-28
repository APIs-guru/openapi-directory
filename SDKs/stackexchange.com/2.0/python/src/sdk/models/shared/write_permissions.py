from dataclasses import dataclass, field
from typing import Optional


@dataclass
class WritePermissions:
    can_add: Optional[bool] = field(default=None)
    can_delete: Optional[bool] = field(default=None)
    can_edit: Optional[bool] = field(default=None)
    max_daily_actions: Optional[int] = field(default=None)
    min_seconds_between_actions: Optional[int] = field(default=None)
    object_type: Optional[str] = field(default=None)
    user_id: Optional[int] = field(default=None)
    
