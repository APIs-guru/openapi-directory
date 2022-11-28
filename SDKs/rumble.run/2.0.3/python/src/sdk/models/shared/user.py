from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class User:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    client_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_admin') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    invite_token_expiration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invite_token_expiration') }})
    last_login_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_login_at') }})
    last_login_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_login_ip') }})
    last_login_ua: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_login_ua') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    login_failures: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login_failures') }})
    org_default_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org_default_role') }})
    org_roles: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org_roles') }})
    reset_token_expiration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset_token_expiration') }})
    sso_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sso_only') }})
    updated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    
