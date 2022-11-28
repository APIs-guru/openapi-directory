from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DatabaseTestConnectionSchema:
    configuration_method: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration_method') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database_name') }})
    encrypted_extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encrypted_extra') }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra') }})
    impersonate_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impersonate_user') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    server_cert: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_cert') }})
    sqlalchemy_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlalchemy_uri') }})
    
