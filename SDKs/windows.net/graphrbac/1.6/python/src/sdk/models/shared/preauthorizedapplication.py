from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PreAuthorizedApplication:
    r"""PreAuthorizedApplication
    Contains information about pre authorized client application.
    """
    
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    extensions: Optional[List[PreAuthorizedApplicationExtension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extensions') }})
    permissions: Optional[List[PreAuthorizedApplicationPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
