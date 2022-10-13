from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObtainTokenResponse:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id_token' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant_id' }})
    plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan_id' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_token' }})
    short_lived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'short_lived' }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription_id' }})
    token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_type' }})
    
