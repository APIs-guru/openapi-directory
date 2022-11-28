from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPI10ProgramsResponse:
    content_type: str = field()
    status_code: int = field()
    programs: Optional[List[shared.Program]] = field(default=None)
    
