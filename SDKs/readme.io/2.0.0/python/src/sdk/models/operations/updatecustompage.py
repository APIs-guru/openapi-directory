from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from sdk.models import shared


@dataclass
class UpdateCustomPagePathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomPageSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCustomPageRequest:
    path_params: UpdateCustomPagePathParams = field()
    request: shared.CustomPage = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateCustomPageSecurity = field()
    

@dataclass
class UpdateCustomPageResponse:
    content_type: str = field()
    status_code: int = field()
    
