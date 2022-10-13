from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import preauthorizedapplicationextension
from . import preauthorizedapplicationpermission


@dataclass_json
@dataclass
class PreAuthorizedApplication:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    extensions: Optional[List[preauthorizedapplicationextension.PreAuthorizedApplicationExtension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extensions' }})
    permissions: Optional[List[preauthorizedapplicationpermission.PreAuthorizedApplicationPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    
