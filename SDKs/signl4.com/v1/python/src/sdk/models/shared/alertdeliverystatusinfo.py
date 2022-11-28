from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlertDeliveryStatusInfo:
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    users: Optional[List[UserDeliveryStatusInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
