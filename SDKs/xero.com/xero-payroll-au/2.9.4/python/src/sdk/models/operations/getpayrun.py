from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayRunPathParams:
    pay_run_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PayRunID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayRunHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class GetPayRunSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPayRunRequest:
    path_params: GetPayRunPathParams = field(default=None)
    headers: GetPayRunHeaders = field(default=None)
    security: GetPayRunSecurity = field(default=None)
    

@dataclass
class GetPayRunResponse:
    content_type: str = field(default=None)
    pay_runs: Optional[shared.PayRuns] = field(default=None)
    status_code: int = field(default=None)
    
