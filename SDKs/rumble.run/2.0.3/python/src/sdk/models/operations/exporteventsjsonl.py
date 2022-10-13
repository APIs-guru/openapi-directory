from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ExportEventsJsonlQueryParams:
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportEventsJsonlSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportEventsJsonlRequest:
    query_params: ExportEventsJsonlQueryParams = field(default=None)
    security: ExportEventsJsonlSecurity = field(default=None)
    

@dataclass
class ExportEventsJsonlResponse:
    content_type: str = field(default=None)
    events: Optional[List[shared.Event]] = field(default=None)
    status_code: int = field(default=None)
    
