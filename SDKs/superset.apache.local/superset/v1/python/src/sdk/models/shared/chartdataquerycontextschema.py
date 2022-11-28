from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChartDataQueryContextSchema:
    datasource: Optional[ChartDataDatasource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasource') }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force') }})
    queries: Optional[List[ChartDataQueryObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queries') }})
    result_format: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_format') }})
    result_type: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_type') }})
    
