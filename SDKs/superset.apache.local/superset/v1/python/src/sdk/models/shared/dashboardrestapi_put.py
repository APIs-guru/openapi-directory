from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DashboardRestAPIPut:
    css: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('css') }})
    dashboard_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboard_title') }})
    json_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('json_metadata') }})
    owners: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owners') }})
    position_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position_json') }})
    published: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    roles: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    
