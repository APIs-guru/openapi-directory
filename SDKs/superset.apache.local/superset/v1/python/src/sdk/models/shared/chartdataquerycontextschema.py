from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import chartdatadatasource
from . import chartdataqueryobject


@dataclass_json
@dataclass
class ChartDataQueryContextSchema:
    datasource: Optional[chartdatadatasource.ChartDataDatasource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasource' }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force' }})
    queries: Optional[List[chartdataqueryobject.ChartDataQueryObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queries' }})
    result_format: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_format' }})
    result_type: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_type' }})
    
