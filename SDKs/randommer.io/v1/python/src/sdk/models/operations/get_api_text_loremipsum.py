from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetAPITextLoremIpsumQueryParams:
    lorem_type: shared.LoremTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'loremType', 'style': 'form', 'explode': True }})
    number: int = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    type: shared.TextTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPITextLoremIpsumHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPITextLoremIpsumRequest:
    query_params: GetAPITextLoremIpsumQueryParams = field(default=None)
    headers: GetAPITextLoremIpsumHeaders = field(default=None)
    

@dataclass
class GetAPITextLoremIpsumResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
