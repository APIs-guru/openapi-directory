from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetLastPayDateReportOuputQueryParams:
    employee_key: str = field(metadata={'query_param': { 'field_name': 'EmployeeKey', 'style': 'form', 'explode': True }})
    employer_key: str = field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLastPayDateReportOuputHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLastPayDateReportOuputRequest:
    headers: GetLastPayDateReportOuputHeaders = field()
    query_params: GetLastPayDateReportOuputQueryParams = field()
    

@dataclass
class GetLastPayDateReportOuputResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_last_pay_date_report_ouput_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
