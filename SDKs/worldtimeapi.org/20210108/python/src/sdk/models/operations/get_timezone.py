from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetTimezoneResponse:
    content_type: str = field()
    status_code: int = field()
    list_json_response: Optional[List[str]] = field(default=None)
    
