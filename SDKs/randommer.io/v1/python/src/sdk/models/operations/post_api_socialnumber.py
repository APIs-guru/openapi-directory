from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class PostAPISocialNumberQueryParams:
    id_type: shared.IDTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'idType', 'style': 'form', 'explode': True }})
    

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
    query_params: PostAPISocialNumberQueryParams = field(default=None)
    headers: PostAPISocialNumberHeaders = field(default=None)
    request: PostAPISocialNumberRequests = field(default=None)
    

@dataclass
class PostAPISocialNumberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
