from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import seldonmessage


@dataclass_json
@dataclass
class SeldonMessageList:
    seldon_messages: Optional[List[seldonmessage.SeldonMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seldonMessages' }})
    
