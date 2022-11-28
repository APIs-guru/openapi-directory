from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DatabaseValidateParametersSchema:
    configuration_method: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration_method') }})
    engine: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database_name') }})
    encrypted_extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encrypted_extra') }})
    extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra') }})
    impersonate_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impersonate_user') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    server_cert: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_cert') }})
    
