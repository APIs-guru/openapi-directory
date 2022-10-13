from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountKeysSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountKeysRequest:
    security: GetAccountKeysSecurity = field(default=None)
    

@dataclass
class GetAccountKeysResponse:
    api_keys: Optional[List[shared.APIKey]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
