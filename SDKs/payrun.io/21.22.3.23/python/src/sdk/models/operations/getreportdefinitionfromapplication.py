from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportDefinitionFromApplicationPathParams:
    report_definition_id: str = field(metadata={'path_param': { 'field_name': 'ReportDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportDefinitionFromApplicationHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportDefinitionFromApplicationRequest:
    headers: GetReportDefinitionFromApplicationHeaders = field()
    path_params: GetReportDefinitionFromApplicationPathParams = field()
    

@dataclass
class GetReportDefinitionFromApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    report_definition: Optional[shared.ReportDefinition] = field(default=None)
    
