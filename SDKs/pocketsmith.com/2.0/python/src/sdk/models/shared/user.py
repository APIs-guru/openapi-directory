from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class User:
    always_show_base_currency: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'always_show_base_currency' }})
    avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    base_currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_currency_code' }})
    beta_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beta_user' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_activity_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_activity_at' }})
    last_logged_in_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_logged_in_at' }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_zone' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    using_multiple_currencies: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'using_multiple_currencies' }})
    week_start_day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'week_start_day' }})
    
