from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetAPINameQueryParams:
    name_type: shared.NameTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'nameType', 'style': 'form', 'explode': True }})
    quantity: int = field(default=None, metadata={'query_param': { 'field_name': 'quantity', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPINameHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key' }})
    

@dataclass
class GetAPINameRequest:
    query_params: GetAPINameQueryParams = field(default=None)
    headers: GetAPINameHeaders = field(default=None)
    

@dataclass
class GetAPINameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
