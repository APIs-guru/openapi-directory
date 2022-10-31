from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLastPayDateReportOuputQueryParams:
    employee_key: str = field(default=None, metadata={'query_param': { 'field_name': 'EmployeeKey', 'style': 'form', 'explode': True }})
    employer_key: str = field(default=None, metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLastPayDateReportOuputHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLastPayDateReportOuputRequest:
    query_params: GetLastPayDateReportOuputQueryParams = field(default=None)
    headers: GetLastPayDateReportOuputHeaders = field(default=None)
    

@dataclass
class GetLastPayDateReportOuputResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_last_pay_date_report_ouput_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
