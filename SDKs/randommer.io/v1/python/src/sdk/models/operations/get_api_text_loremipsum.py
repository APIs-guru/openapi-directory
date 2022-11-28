from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAPITextLoremIpsumQueryParams:
    lorem_type: shared.LoremTypeEnum = field(metadata={'query_param': { 'field_name': 'loremType', 'style': 'form', 'explode': True }})
    number: int = field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    type: shared.TextTypeEnum = field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPITextLoremIpsumHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPITextLoremIpsumRequest:
    headers: GetAPITextLoremIpsumHeaders = field()
    query_params: GetAPITextLoremIpsumQueryParams = field()
    

@dataclass
class GetAPITextLoremIpsumResponse:
    content_type: str = field()
    status_code: int = field()
    
