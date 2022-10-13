from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreatePayRunHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class CreatePayRunSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePayRunRequest:
    headers: CreatePayRunHeaders = field(default=None)
    request: List[shared.PayRun] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePayRunSecurity = field(default=None)
    

@dataclass
class CreatePayRunResponse:
    content_type: str = field(default=None)
    pay_runs: Optional[shared.PayRuns] = field(default=None)
    status_code: int = field(default=None)
    
