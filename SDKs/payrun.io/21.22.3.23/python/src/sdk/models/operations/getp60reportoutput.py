from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetP60ReportOutputQueryParams:
    employer_key: str = field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    tax_year: str = field(metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    employee_codes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EmployeeCodes', 'style': 'form', 'explode': True }})
    max_index: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxIndex', 'style': 'form', 'explode': True }})
    start_index: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'StartIndex', 'style': 'form', 'explode': True }})
    transform_definition_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TransformDefinitionKey', 'style': 'form', 'explode': True }})
    

@dataclass
class GetP60ReportOutputHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetP60ReportOutputRequest:
    headers: GetP60ReportOutputHeaders = field()
    query_params: GetP60ReportOutputQueryParams = field()
    

@dataclass
class GetP60ReportOutputResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_p60_report_output_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
