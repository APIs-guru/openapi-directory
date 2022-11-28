from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountKeysSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountKeysRequest:
    security: GetAccountKeysSecurity = field()
    

@dataclass
class GetAccountKeysResponse:
    content_type: str = field()
    status_code: int = field()
    api_keys: Optional[List[shared.APIKey]] = field(default=None)
    
