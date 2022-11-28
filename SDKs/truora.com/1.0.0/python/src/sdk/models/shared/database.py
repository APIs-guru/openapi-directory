from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Database:
    r"""Database
    Represents a database as well as an hourly status
    """
    
    data_sets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_sets') }})
    database_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database_id') }})
    database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database_name') }})
    hourly_status: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hourly_status') }})
    
