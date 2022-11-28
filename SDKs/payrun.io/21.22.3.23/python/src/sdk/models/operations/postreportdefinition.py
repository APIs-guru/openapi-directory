from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostReportDefinitionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostReportDefinitionRequest:
    headers: PostReportDefinitionHeaders = field()
    request: shared.ReportDefinition = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostReportDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    
