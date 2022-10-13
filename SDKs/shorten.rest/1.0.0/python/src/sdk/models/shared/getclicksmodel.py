from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clickmodel


@dataclass_json
@dataclass
class GetClicksModel:
    clicks: Optional[List[clickmodel.ClickModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clicks' }})
    last_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastId' }})
    
