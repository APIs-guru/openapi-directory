from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayslipPathParams:
    payslip_id: str = field(metadata={'path_param': { 'field_name': 'PayslipID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayslipHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayslipSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPayslipRequest:
    headers: GetPayslipHeaders = field()
    path_params: GetPayslipPathParams = field()
    security: GetPayslipSecurity = field()
    

@dataclass
class GetPayslipResponse:
    content_type: str = field()
    status_code: int = field()
    payslip_object: Optional[shared.PayslipObject] = field(default=None)
    
