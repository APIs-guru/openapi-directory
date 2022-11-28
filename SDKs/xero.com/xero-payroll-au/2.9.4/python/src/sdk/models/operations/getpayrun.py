from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayRunPathParams:
    pay_run_id: str = field(metadata={'path_param': { 'field_name': 'PayRunID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayRunHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayRunSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPayRunRequest:
    headers: GetPayRunHeaders = field()
    path_params: GetPayRunPathParams = field()
    security: GetPayRunSecurity = field()
    

@dataclass
class GetPayRunResponse:
    content_type: str = field()
    status_code: int = field()
    pay_runs: Optional[shared.PayRuns] = field(default=None)
    
