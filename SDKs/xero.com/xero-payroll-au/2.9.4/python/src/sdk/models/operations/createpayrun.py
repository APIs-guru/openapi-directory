from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreatePayRunHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePayRunSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePayRunRequest:
    headers: CreatePayRunHeaders = field()
    request: List[shared.PayRunInput] = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePayRunSecurity = field()
    

@dataclass
class CreatePayRunResponse:
    content_type: str = field()
    status_code: int = field()
    pay_runs: Optional[shared.PayRuns] = field(default=None)
    
