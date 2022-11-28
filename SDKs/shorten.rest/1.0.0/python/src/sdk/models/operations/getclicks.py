from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetClicksQueryParams:
    continue_from: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'continueFrom', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class GetClicksSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetClicksRequest:
    query_params: GetClicksQueryParams = field()
    security: GetClicksSecurity = field()
    

@dataclass
class GetClicksResponse:
    content_type: str = field()
    status_code: int = field()
    get_clicks_model: Optional[shared.GetClicksModel] = field(default=None)
    
