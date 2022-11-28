from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAPINameQueryParams:
    name_type: shared.NameTypeEnum = field(metadata={'query_param': { 'field_name': 'nameType', 'style': 'form', 'explode': True }})
    quantity: int = field(metadata={'query_param': { 'field_name': 'quantity', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPINameHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPINameRequest:
    headers: GetAPINameHeaders = field()
    query_params: GetAPINameQueryParams = field()
    

@dataclass
class GetAPINameResponse:
    content_type: str = field()
    status_code: int = field()
    
