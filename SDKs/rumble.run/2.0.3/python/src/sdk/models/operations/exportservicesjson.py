from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ExportServicesJSONQueryParams:
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportServicesJSONSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportServicesJSONRequest:
    query_params: ExportServicesJSONQueryParams = field()
    security: ExportServicesJSONSecurity = field()
    

@dataclass
class ExportServicesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    services: Optional[List[shared.Service]] = field(default=None)
    
