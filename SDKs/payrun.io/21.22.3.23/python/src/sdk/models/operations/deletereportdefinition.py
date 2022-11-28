from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteReportDefinitionPathParams:
    report_definition_id: str = field(metadata={'path_param': { 'field_name': 'ReportDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteReportDefinitionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteReportDefinitionRequest:
    headers: DeleteReportDefinitionHeaders = field()
    path_params: DeleteReportDefinitionPathParams = field()
    

@dataclass
class DeleteReportDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
