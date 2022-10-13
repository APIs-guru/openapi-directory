from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ExportWirelessJSONQueryParams:
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportWirelessJSONSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportWirelessJSONRequest:
    query_params: ExportWirelessJSONQueryParams = field(default=None)
    security: ExportWirelessJSONSecurity = field(default=None)
    

@dataclass
class ExportWirelessJSONResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wirelesses: Optional[List[shared.Wireless]] = field(default=None)
    
