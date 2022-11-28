from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetGrossToNetReportOutputQueryParams:
    employer_key: str = field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    pay_schedule_key: str = field(metadata={'query_param': { 'field_name': 'PayScheduleKey', 'style': 'form', 'explode': True }})
    tax_year: str = field(metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    max_index: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxIndex', 'style': 'form', 'explode': True }})
    start_index: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'StartIndex', 'style': 'form', 'explode': True }})
    tax_period: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaxPeriod', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGrossToNetReportOutputHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGrossToNetReportOutputRequest:
    headers: GetGrossToNetReportOutputHeaders = field()
    query_params: GetGrossToNetReportOutputQueryParams = field()
    

@dataclass
class GetGrossToNetReportOutputResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_gross_to_net_report_output_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
