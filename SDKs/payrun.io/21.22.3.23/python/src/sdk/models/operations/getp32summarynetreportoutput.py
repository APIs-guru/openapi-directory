from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetP32SummaryNetReportOutputQueryParams:
    employer_key: str = field(default=None, metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    tax_year: str = field(default=None, metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    

@dataclass
class GetP32SummaryNetReportOutputHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetP32SummaryNetReportOutputRequest:
    query_params: GetP32SummaryNetReportOutputQueryParams = field(default=None)
    headers: GetP32SummaryNetReportOutputHeaders = field(default=None)
    

@dataclass
class GetP32SummaryNetReportOutputResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_p32_summary_net_report_output_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
