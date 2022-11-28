from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetP45ReportOutputQueryParams:
    employee_key: str = field(metadata={'query_param': { 'field_name': 'EmployeeKey', 'style': 'form', 'explode': True }})
    employer_key: str = field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    transform_definition_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TransformDefinitionKey', 'style': 'form', 'explode': True }})
    

@dataclass
class GetP45ReportOutputHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetP45ReportOutputRequest:
    headers: GetP45ReportOutputHeaders = field()
    query_params: GetP45ReportOutputQueryParams = field()
    

@dataclass
class GetP45ReportOutputResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_p45_report_output_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
