from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNetPayReportOutputQueryParams:
    employer_key: str = field(default=None, metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    max_index: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxIndex', 'style': 'form', 'explode': True }})
    pay_schedule_key: str = field(default=None, metadata={'query_param': { 'field_name': 'PayScheduleKey', 'style': 'form', 'explode': True }})
    start_index: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'StartIndex', 'style': 'form', 'explode': True }})
    tax_period: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaxPeriod', 'style': 'form', 'explode': True }})
    tax_year: str = field(default=None, metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNetPayReportOutputHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetPayReportOutputRequest:
    query_params: GetNetPayReportOutputQueryParams = field(default=None)
    headers: GetNetPayReportOutputHeaders = field(default=None)
    

@dataclass
class GetNetPayReportOutputResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_net_pay_report_output_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
