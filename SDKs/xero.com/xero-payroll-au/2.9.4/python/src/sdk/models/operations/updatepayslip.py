from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdatePayslipPathParams:
    payslip_id: str = field(metadata={'path_param': { 'field_name': 'PayslipID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePayslipHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePayslipSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdatePayslipRequest:
    headers: UpdatePayslipHeaders = field()
    path_params: UpdatePayslipPathParams = field()
    security: UpdatePayslipSecurity = field()
    request: Optional[List[shared.PayslipLines]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePayslipResponse:
    content_type: str = field()
    status_code: int = field()
    payslips: Optional[shared.Payslips] = field(default=None)
    
