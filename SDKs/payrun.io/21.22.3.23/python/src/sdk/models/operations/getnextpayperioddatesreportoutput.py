from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNextPayPeriodDatesReportOutputQueryParams:
    employer_key: str = field(default=None, metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    pay_schedule_key: str = field(default=None, metadata={'query_param': { 'field_name': 'PayScheduleKey', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNextPayPeriodDatesReportOutputHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNextPayPeriodDatesReportOutputRequest:
    query_params: GetNextPayPeriodDatesReportOutputQueryParams = field(default=None)
    headers: GetNextPayPeriodDatesReportOutputHeaders = field(default=None)
    

@dataclass
class GetNextPayPeriodDatesReportOutputResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_next_pay_period_dates_report_output_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
