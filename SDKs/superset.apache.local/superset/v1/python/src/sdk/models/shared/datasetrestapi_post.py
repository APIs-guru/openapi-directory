from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DatasetRestAPIPost:
    database: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('table_name') }})
    owners: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owners') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    
