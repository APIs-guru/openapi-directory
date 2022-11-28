from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DatasourceDatasourceTypeEnum(str, Enum):
    DRUID = "druid"
    TABLE = "table"
    VIEW = "view"


@dataclass_json
@dataclass
class Datasource:
    datasource_type: DatasourceDatasourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasource_type') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database_name') }})
    datasource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasource_name') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    
