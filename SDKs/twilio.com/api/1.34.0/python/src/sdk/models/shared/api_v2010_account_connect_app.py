from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class APIV2010AccountConnectAppDeauthorizeCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class APIV2010AccountConnectApp:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    authorize_redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorize_redirect_url' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_name' }})
    deauthorize_callback_method: Optional[APIV2010AccountConnectAppDeauthorizeCallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deauthorize_callback_method' }})
    deauthorize_callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deauthorize_callback_url' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    homepage_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homepage_url' }})
    permissions: Optional[List[shared.ConnectAppEnumPermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
