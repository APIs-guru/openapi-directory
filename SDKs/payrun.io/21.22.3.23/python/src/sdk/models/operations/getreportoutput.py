from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportOutputPathParams:
    report_definition_id: str = field(metadata={'path_param': { 'field_name': 'ReportDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportOutputHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportOutputRequest:
    headers: GetReportOutputHeaders = field()
    path_params: GetReportOutputPathParams = field()
    

@dataclass
class GetReportOutputResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_report_output_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
