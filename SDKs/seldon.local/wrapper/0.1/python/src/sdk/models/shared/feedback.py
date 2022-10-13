from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import seldonmessage
from . import seldonmessage
from . import seldonmessage


@dataclass_json
@dataclass
class Feedback:
    request: Optional[seldonmessage.SeldonMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request' }})
    response: Optional[seldonmessage.SeldonMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    reward: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reward' }})
    truth: Optional[seldonmessage.SeldonMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truth' }})
    
