from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetHolidayBalanceReportOutputQueryParams:
    employer_key: str = field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    holiday_year_end: date = field(metadata={'query_param': { 'field_name': 'HolidayYearEnd', 'style': 'form', 'explode': True }})
    employee_codes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EmployeeCodes', 'style': 'form', 'explode': True }})
    max_index: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxIndex', 'style': 'form', 'explode': True }})
    start_index: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'StartIndex', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHolidayBalanceReportOutputHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHolidayBalanceReportOutputRequest:
    headers: GetHolidayBalanceReportOutputHeaders = field()
    query_params: GetHolidayBalanceReportOutputQueryParams = field()
    

@dataclass
class GetHolidayBalanceReportOutputResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_holiday_balance_report_output_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
