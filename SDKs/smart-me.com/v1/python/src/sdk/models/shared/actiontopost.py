from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionToPost:
    r"""ActionToPost
    Container Class for an action to post
    """
    
    actions: Optional[List[ActionToPostItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceID') }})
    
