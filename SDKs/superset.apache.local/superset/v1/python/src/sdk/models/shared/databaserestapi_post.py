from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DatabaseRestAPIPost:
    database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('database_name') }})
    allow_csv_upload: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_csv_upload') }})
    allow_ctas: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_ctas') }})
    allow_cvas: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_cvas') }})
    allow_dml: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_dml') }})
    allow_multi_schema_metadata_fetch: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_multi_schema_metadata_fetch') }})
    allow_run_async: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_run_async') }})
    cache_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache_timeout') }})
    configuration_method: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration_method') }})
    encrypted_extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encrypted_extra') }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    expose_in_sqllab: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expose_in_sqllab') }})
    extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra') }})
    force_ctas_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force_ctas_schema') }})
    impersonate_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impersonate_user') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    server_cert: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_cert') }})
    sqlalchemy_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlalchemy_uri') }})
    
