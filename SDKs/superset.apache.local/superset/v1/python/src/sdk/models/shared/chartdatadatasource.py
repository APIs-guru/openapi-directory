from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ChartDataDatasourceTypeEnum(str, Enum):
    DRUID = "druid"
    TABLE = "table"


@dataclass_json
@dataclass
class ChartDataDatasource:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[ChartDataDatasourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
