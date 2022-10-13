from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ExportSitesJSONQueryParams:
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportSitesJSONSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportSitesJSONRequest:
    query_params: ExportSitesJSONQueryParams = field(default=None)
    security: ExportSitesJSONSecurity = field(default=None)
    

@dataclass
class ExportSitesJSONResponse:
    content_type: str = field(default=None)
    sites: Optional[List[shared.Site]] = field(default=None)
    status_code: int = field(default=None)
    
