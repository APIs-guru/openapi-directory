from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ChartDataDatasourceTypeEnum(str, Enum):
    DRUID = "druid"
    TABLE = "table"


@dataclass_json
@dataclass
class ChartDataDatasource:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[ChartDataDatasourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
