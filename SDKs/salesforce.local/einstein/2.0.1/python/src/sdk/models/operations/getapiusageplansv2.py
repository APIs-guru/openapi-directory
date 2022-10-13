from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIUsagePlansV2Security:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAPIUsagePlansV2Request:
    security: GetAPIUsagePlansV2Security = field(default=None)
    

@dataclass
class GetAPIUsagePlansV2Response:
    api_usage_list: Optional[shared.APIUsageList] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
