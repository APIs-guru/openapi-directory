from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVodGenresResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    on_demand_genres: Optional[List[shared.OnDemandGenre]] = field(default=None)
    
