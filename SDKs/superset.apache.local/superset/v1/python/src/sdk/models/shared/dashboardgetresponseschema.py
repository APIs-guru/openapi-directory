from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DashboardGetResponseSchema:
    changed_by: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_by') }})
    changed_by_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_by_name') }})
    changed_by_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_by_url') }})
    changed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    changed_on_delta_humanized: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_on_delta_humanized') }})
    charts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charts') }})
    css: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('css') }})
    dashboard_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboard_title') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    json_metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('json_metadata') }})
    owners: Optional[List[User]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owners') }})
    position_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position_json') }})
    published: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    roles: Optional[List[Roles]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    table_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table_names') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
