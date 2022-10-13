from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportDefinitionFromApplicationPathParams:
    report_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ReportDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportDefinitionFromApplicationHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetReportDefinitionFromApplicationRequest:
    path_params: GetReportDefinitionFromApplicationPathParams = field(default=None)
    headers: GetReportDefinitionFromApplicationHeaders = field(default=None)
    

@dataclass
class GetReportDefinitionFromApplicationResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    report_definition: Optional[shared.ReportDefinition] = field(default=None)
    status_code: int = field(default=None)
    
