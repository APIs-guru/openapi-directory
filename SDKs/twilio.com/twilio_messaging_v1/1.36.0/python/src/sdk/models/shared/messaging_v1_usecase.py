from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MessagingV1Usecase:
    usecases: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usecases' }})
    
