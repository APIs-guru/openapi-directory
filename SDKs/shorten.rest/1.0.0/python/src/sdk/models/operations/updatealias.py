from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAliasQueryParams:
    alias_name: str = field(metadata={'query_param': { 'field_name': 'aliasName', 'style': 'form', 'explode': True }})
    domain_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domainName', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateAliasSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateAliasRequest:
    query_params: UpdateAliasQueryParams = field()
    request: shared.CreateAliasModel = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAliasSecurity = field()
    

@dataclass
class UpdateAliasResponse:
    content_type: str = field()
    status_code: int = field()
    
