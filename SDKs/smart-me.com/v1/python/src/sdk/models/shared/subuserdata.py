from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SubUserDataPermissionLevelEnum(str, Enum):
    SELECTED_FOLDER_AND_SUBFOLDERS_METERS = "SelectedFolderAndSubfoldersMeters"
    SELECTED_FOLDER_ONLY = "SelectedFolderOnly"


@dataclass_json
@dataclass
class SubUserData:
    access_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessEndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'AccessEndDate' }})
    access_time_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessTimeStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'AccessTimeStartDate' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }, 'form': { 'field_name': 'Email' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }, 'form': { 'field_name': 'Id' }})
    new_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewPassword' }, 'form': { 'field_name': 'NewPassword' }})
    permission_level: Optional[SubUserDataPermissionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionLevel' }, 'form': { 'field_name': 'PermissionLevel' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }, 'form': { 'field_name': 'Username' }})
    
