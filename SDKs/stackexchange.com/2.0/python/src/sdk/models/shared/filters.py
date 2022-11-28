from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class Filters:
    filter: Optional[str] = field(default=None)
    filter_type: Optional[str] = field(default=None)
    included_fields: Optional[List[Any]] = field(default=None)
    
