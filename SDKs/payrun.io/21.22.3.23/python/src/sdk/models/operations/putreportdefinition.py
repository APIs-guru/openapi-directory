from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutReportDefinitionPathParams:
    report_definition_id: str = field(metadata={'path_param': { 'field_name': 'ReportDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutReportDefinitionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutReportDefinitionRequest:
    headers: PutReportDefinitionHeaders = field()
    path_params: PutReportDefinitionPathParams = field()
    request: shared.ReportDefinition = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutReportDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    report_definition: Optional[shared.ReportDefinition] = field(default=None)
    
