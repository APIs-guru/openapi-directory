from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import asset


@dataclass_json
@dataclass
class Assets:
    items: Optional[List[asset.Asset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    pagination: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    
