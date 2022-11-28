from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetAPIPhoneValidateQueryParams:
    telephone: str = field(metadata={'query_param': { 'field_name': 'telephone', 'style': 'form', 'explode': True }})
    country_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CountryCode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIPhoneValidateHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIPhoneValidateRequest:
    headers: GetAPIPhoneValidateHeaders = field()
    query_params: GetAPIPhoneValidateQueryParams = field()
    

@dataclass
class GetAPIPhoneValidateResponse:
    content_type: str = field()
    status_code: int = field()
    
