from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListCheckDetailsPathParams:
    check_id: str = field(metadata={'path_param': { 'field_name': 'check_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCheckDetailsQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    start_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_key', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCheckDetailsSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ListCheckDetailsRequest:
    path_params: ListCheckDetailsPathParams = field()
    query_params: ListCheckDetailsQueryParams = field()
    security: ListCheckDetailsSecurity = field()
    

@dataclass
class ListCheckDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    check_details_output: Optional[shared.CheckDetailsOutput] = field(default=None)
    
