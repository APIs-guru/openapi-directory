from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportDefinitionsFromApplicationHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetReportDefinitionsFromApplicationRequest:
    headers: GetReportDefinitionsFromApplicationHeaders = field(default=None)
    

@dataclass
class GetReportDefinitionsFromApplicationResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
