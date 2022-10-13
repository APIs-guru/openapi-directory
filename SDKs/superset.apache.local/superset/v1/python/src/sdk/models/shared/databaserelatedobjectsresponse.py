from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import databaserelatedcharts
from . import databaserelateddashboards


@dataclass_json
@dataclass
class DatabaseRelatedObjectsResponse:
    charts: Optional[databaserelatedcharts.DatabaseRelatedCharts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charts' }})
    dashboards: Optional[databaserelateddashboards.DatabaseRelatedDashboards] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboards' }})
    
