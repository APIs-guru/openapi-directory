from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCcLicensesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    creative_commons: Optional[List[shared.CreativeCommons]] = field(default=None)
    
