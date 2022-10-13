from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteReportDefinitionPathParams:
    report_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ReportDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteReportDefinitionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class DeleteReportDefinitionRequest:
    path_params: DeleteReportDefinitionPathParams = field(default=None)
    headers: DeleteReportDefinitionHeaders = field(default=None)
    

@dataclass
class DeleteReportDefinitionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
