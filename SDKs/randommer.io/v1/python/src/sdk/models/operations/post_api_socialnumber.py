from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PostAPISocialNumberQueryParams:
    id_type: shared.IDTypeEnum = field(metadata={'query_param': { 'field_name': 'idType', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAPISocialNumberHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPISocialNumberRequests:
    number_validation: Optional[shared.NumberValidation] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    number_validation1: Optional[shared.NumberValidation] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    number_validation2: Optional[shared.NumberValidation] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    number_validation3: Optional[shared.NumberValidation] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPISocialNumberRequest:
    headers: PostAPISocialNumberHeaders = field()
    query_params: PostAPISocialNumberQueryParams = field()
    request: PostAPISocialNumberRequests = field()
    

@dataclass
class PostAPISocialNumberResponse:
    content_type: str = field()
    status_code: int = field()
    
