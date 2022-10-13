from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasetrelatedcharts
from . import datasetrelateddashboards


@dataclass_json
@dataclass
class DatasetRelatedObjectsResponse:
    charts: Optional[datasetrelatedcharts.DatasetRelatedCharts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charts' }})
    dashboards: Optional[datasetrelateddashboards.DatasetRelatedDashboards] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboards' }})
    
