from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetP32NetReportOutputQueryParams:
    employer_key: str = field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    tax_year: str = field(metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    

@dataclass
class GetP32NetReportOutputHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetP32NetReportOutputRequest:
    headers: GetP32NetReportOutputHeaders = field()
    query_params: GetP32NetReportOutputQueryParams = field()
    

@dataclass
class GetP32NetReportOutputResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_p32_net_report_output_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
