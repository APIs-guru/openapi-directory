from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostMyOrdersSellingIDMarkPickedUpPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostMyOrdersSellingIDMarkPickedUpRequestBody:
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    

@dataclass
class PostMyOrdersSellingIDMarkPickedUpSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyOrdersSellingIDMarkPickedUpRequest:
    path_params: PostMyOrdersSellingIDMarkPickedUpPathParams = field()
    security: PostMyOrdersSellingIDMarkPickedUpSecurity = field()
    request: Optional[PostMyOrdersSellingIDMarkPickedUpRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostMyOrdersSellingIDMarkPickedUpResponse:
    content_type: str = field()
    status_code: int = field()
    
