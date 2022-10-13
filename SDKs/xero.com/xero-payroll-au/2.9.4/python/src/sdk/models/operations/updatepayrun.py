from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdatePayRunPathParams:
    pay_run_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PayRunID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePayRunHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class UpdatePayRunSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdatePayRunRequest:
    path_params: UpdatePayRunPathParams = field(default=None)
    headers: UpdatePayRunHeaders = field(default=None)
    request: Optional[List[shared.PayRun]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePayRunSecurity = field(default=None)
    

@dataclass
class UpdatePayRunResponse:
    content_type: str = field(default=None)
    pay_runs: Optional[shared.PayRuns] = field(default=None)
    status_code: int = field(default=None)
    
