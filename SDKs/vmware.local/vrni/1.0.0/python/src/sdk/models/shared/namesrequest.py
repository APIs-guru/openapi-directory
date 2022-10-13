from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namerequestparam


@dataclass_json
@dataclass
class NamesRequest:
    entities: Optional[List[namerequestparam.NameRequestParam]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    
