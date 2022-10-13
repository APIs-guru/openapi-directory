from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userdeliverystatusinfo


@dataclass_json
@dataclass
class AlertDeliveryStatusInfo:
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    users: Optional[List[userdeliverystatusinfo.UserDeliveryStatusInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    
