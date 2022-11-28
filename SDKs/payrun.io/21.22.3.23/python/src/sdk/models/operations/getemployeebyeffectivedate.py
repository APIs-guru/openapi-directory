from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmployeeByEffectiveDatePathParams:
    effective_date: date = field(metadata={'path_param': { 'field_name': 'EffectiveDate', 'style': 'simple', 'explode': False }})
    employee_id: str = field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployeeByEffectiveDateHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployeeByEffectiveDateRequest:
    headers: GetEmployeeByEffectiveDateHeaders = field()
    path_params: GetEmployeeByEffectiveDatePathParams = field()
    

@dataclass
class GetEmployeeByEffectiveDateResponse:
    content_type: str = field()
    status_code: int = field()
    employee: Optional[shared.Employee] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
