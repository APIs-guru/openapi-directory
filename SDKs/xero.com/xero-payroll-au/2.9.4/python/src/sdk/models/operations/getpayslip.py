from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayslipPathParams:
    payslip_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PayslipID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayslipHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class GetPayslipSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPayslipRequest:
    path_params: GetPayslipPathParams = field(default=None)
    headers: GetPayslipHeaders = field(default=None)
    security: GetPayslipSecurity = field(default=None)
    

@dataclass
class GetPayslipResponse:
    content_type: str = field(default=None)
    payslip_object: Optional[shared.PayslipObject] = field(default=None)
    status_code: int = field(default=None)
    
