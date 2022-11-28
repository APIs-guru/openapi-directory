from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ResultPage:
    r"""ResultPage
    Encapsulates a list of results.
    """
    
    items: Optional[List[dict[str, Any]]] = field(default=None)
    restricted_rights: Optional[bool] = field(default=None)
    total: Optional[int] = field(default=None)
    
