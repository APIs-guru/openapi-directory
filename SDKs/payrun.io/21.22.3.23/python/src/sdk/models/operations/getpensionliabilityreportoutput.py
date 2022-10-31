from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPensionLiabilityReportOutputQueryParams:
    employer_key: str = field(default=None, metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    pension_key: str = field(default=None, metadata={'query_param': { 'field_name': 'PensionKey', 'style': 'form', 'explode': True }})
    tax_year: str = field(default=None, metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPensionLiabilityReportOutputHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPensionLiabilityReportOutputRequest:
    query_params: GetPensionLiabilityReportOutputQueryParams = field(default=None)
    headers: GetPensionLiabilityReportOutputHeaders = field(default=None)
    

@dataclass
class GetPensionLiabilityReportOutputResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_pension_liability_report_output_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
