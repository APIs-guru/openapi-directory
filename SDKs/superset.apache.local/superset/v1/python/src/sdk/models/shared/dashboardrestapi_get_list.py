from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DashboardRestAPIGetList:
    changed_by: Optional[Meta15] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_by') }})
    changed_by_name: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_by_name') }})
    changed_by_url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_by_url') }})
    changed_on_delta_humanized: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_on_delta_humanized') }})
    changed_on_utc: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_on_utc') }})
    created_by: Optional[Meta14] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    css: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('css') }})
    dashboard_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboard_title') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    json_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('json_metadata') }})
    owners: Optional[Meta17] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owners') }})
    position_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position_json') }})
    published: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    roles: Optional[Meta16] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    thumbnail_url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail_url') }})
    url: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
