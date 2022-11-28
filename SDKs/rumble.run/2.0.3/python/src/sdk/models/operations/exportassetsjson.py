from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ExportAssetsJSONQueryParams:
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportAssetsJSONSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportAssetsJSONRequest:
    query_params: ExportAssetsJSONQueryParams = field()
    security: ExportAssetsJSONSecurity = field()
    

@dataclass
class ExportAssetsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    assets: Optional[List[shared.Asset]] = field(default=None)
    
