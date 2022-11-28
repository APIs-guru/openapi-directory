from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BulkResponseDataBulk:
    duplicate_import_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicate_import_ids') }})
    transaction_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_ids') }})
    

@dataclass_json
@dataclass
class BulkResponseData:
    bulk: BulkResponseDataBulk = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bulk') }})
    

@dataclass_json
@dataclass
class BulkResponse:
    data: BulkResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
