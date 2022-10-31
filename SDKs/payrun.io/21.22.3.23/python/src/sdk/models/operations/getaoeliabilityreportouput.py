from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAoeLiabilityReportOuputQueryParams:
    employer_key: str = field(default=None, metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    pay_schedule_key: str = field(default=None, metadata={'query_param': { 'field_name': 'PayScheduleKey', 'style': 'form', 'explode': True }})
    tax_period: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaxPeriod', 'style': 'form', 'explode': True }})
    tax_year: str = field(default=None, metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    transform_definition_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TransformDefinitionKey', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAoeLiabilityReportOuputHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAoeLiabilityReportOuputRequest:
    query_params: GetAoeLiabilityReportOuputQueryParams = field(default=None)
    headers: GetAoeLiabilityReportOuputHeaders = field(default=None)
    

@dataclass
class GetAoeLiabilityReportOuputResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_aoe_liability_report_ouput_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
