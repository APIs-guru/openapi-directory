from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutReportDefinitionPathParams:
    report_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ReportDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutReportDefinitionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutReportDefinitionRequest:
    path_params: PutReportDefinitionPathParams = field(default=None)
    headers: PutReportDefinitionHeaders = field(default=None)
    request: shared.ReportDefinition = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutReportDefinitionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    report_definition: Optional[shared.ReportDefinition] = field(default=None)
    status_code: int = field(default=None)
    
