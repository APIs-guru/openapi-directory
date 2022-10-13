from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutUsersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutUsersIDRequestBody:
    always_show_base_currency: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'always_show_base_currency' }})
    base_currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_currency_code' }})
    beta_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beta_user' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_zone' }})
    week_start_day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'week_start_day' }})
    

@dataclass
class PutUsersIDRequest:
    path_params: PutUsersIDPathParams = field(default=None)
    request: Optional[PutUsersIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUsersIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
