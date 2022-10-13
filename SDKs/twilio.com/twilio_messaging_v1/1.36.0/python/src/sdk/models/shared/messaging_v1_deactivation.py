from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MessagingV1Deactivation:
    redirect_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_to' }})
    
