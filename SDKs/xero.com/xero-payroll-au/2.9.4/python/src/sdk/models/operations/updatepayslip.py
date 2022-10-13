from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdatePayslipPathParams:
    payslip_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PayslipID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePayslipHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class UpdatePayslipSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdatePayslipRequest:
    path_params: UpdatePayslipPathParams = field(default=None)
    headers: UpdatePayslipHeaders = field(default=None)
    request: Optional[List[shared.PayslipLines]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePayslipSecurity = field(default=None)
    

@dataclass
class UpdatePayslipResponse:
    content_type: str = field(default=None)
    payslips: Optional[shared.Payslips] = field(default=None)
    status_code: int = field(default=None)
    
