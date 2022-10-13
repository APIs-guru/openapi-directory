from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRegionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    on_demand_regions: Optional[List[shared.OnDemandRegion]] = field(default=None)
    
