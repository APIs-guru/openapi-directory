from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserDeliveryStatusInfo:
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
