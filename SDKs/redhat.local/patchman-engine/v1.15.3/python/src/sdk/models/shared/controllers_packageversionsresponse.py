from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ControllersPackageVersionsResponse:
    data: Optional[List[ControllersPackageVersionItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[ControllersLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[ControllersListMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
