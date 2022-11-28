from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    team_infos: Optional[List[shared.TeamInfo]] = field(default=None)
    
