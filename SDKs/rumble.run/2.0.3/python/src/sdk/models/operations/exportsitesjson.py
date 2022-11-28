from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ExportSitesJSONQueryParams:
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportSitesJSONSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportSitesJSONRequest:
    query_params: ExportSitesJSONQueryParams = field()
    security: ExportSitesJSONSecurity = field()
    

@dataclass
class ExportSitesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    sites: Optional[List[shared.Site]] = field(default=None)
    
