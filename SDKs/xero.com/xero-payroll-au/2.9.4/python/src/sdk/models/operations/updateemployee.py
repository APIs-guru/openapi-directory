from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateEmployeePathParams:
    employee_id: str = field(metadata={'path_param': { 'field_name': 'EmployeeID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEmployeeHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEmployeeSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateEmployeeRequest:
    headers: UpdateEmployeeHeaders = field()
    path_params: UpdateEmployeePathParams = field()
    security: UpdateEmployeeSecurity = field()
    request: Optional[List[shared.EmployeeInput]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateEmployeeResponse:
    content_type: str = field()
    status_code: int = field()
    employees: Optional[shared.Employees] = field(default=None)
    
