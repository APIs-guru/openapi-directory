from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCcLicensesResponse:
    content_type: str = field()
    status_code: int = field()
    creative_commons: Optional[List[shared.CreativeCommons]] = field(default=None)
    
