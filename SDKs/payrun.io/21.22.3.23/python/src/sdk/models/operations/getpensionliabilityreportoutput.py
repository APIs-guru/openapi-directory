from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPensionLiabilityReportOutputQueryParams:
    employer_key: str = field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    pension_key: str = field(metadata={'query_param': { 'field_name': 'PensionKey', 'style': 'form', 'explode': True }})
    tax_year: str = field(metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPensionLiabilityReportOutputHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPensionLiabilityReportOutputRequest:
    headers: GetPensionLiabilityReportOutputHeaders = field()
    query_params: GetPensionLiabilityReportOutputQueryParams = field()
    

@dataclass
class GetPensionLiabilityReportOutputResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_pension_liability_report_output_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
