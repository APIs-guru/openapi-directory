from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Meta:
    metrics: Optional[List[Metric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    puid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('puid') }})
    request_path: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestPath') }})
    routing: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing') }})
    tags: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
