from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIUsagePlansV2Security:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAPIUsagePlansV2Request:
    security: GetAPIUsagePlansV2Security = field()
    

@dataclass
class GetAPIUsagePlansV2Response:
    content_type: str = field()
    status_code: int = field()
    api_usage_list: Optional[shared.APIUsageList] = field(default=None)
    
