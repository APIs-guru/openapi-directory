from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class PostCompanyEmployeesRequestBodyEmployeeGenderEnum(str, Enum):
    MALE = "male"
    FEMALE = "female"
    DIVERSE = "diverse"


@dataclass
class PostCompanyEmployeesRequestBody:
    employee_email_: str = field(metadata={'form': { 'field_name': 'employee[email]' }})
    employee_first_name_: str = field(metadata={'form': { 'field_name': 'employee[first_name]' }})
    employee_last_name_: str = field(metadata={'form': { 'field_name': 'employee[last_name]' }})
    employee_department_: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'employee[department]' }})
    employee_gender_: Optional[PostCompanyEmployeesRequestBodyEmployeeGenderEnum] = field(default=None, metadata={'form': { 'field_name': 'employee[gender]' }})
    employee_hire_date_: Optional[date] = field(default=None, metadata={'form': { 'field_name': 'employee[hire_date]' }})
    employee_position_: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'employee[position]' }})
    employee_weekly_hours_: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'employee[weekly_hours]' }})
    

@dataclass
class PostCompanyEmployeesRequest:
    request: PostCompanyEmployeesRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class PostCompanyEmployeesResponse:
    content_type: str = field()
    status_code: int = field()
    response: Optional[shared.Response] = field(default=None)
    
