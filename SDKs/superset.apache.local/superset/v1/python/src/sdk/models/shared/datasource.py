from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DatasourceDatasourceTypeEnum(str, Enum):
    DRUID = "druid"
    TABLE = "table"
    VIEW = "view"


@dataclass_json
@dataclass
class Datasource:
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database_name' }})
    datasource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasource_name' }})
    datasource_type: DatasourceDatasourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasource_type' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    
