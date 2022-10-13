from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BulkResponseDataBulk:
    duplicate_import_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duplicate_import_ids' }})
    transaction_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_ids' }})
    

@dataclass_json
@dataclass
class BulkResponseData:
    bulk: BulkResponseDataBulk = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bulk' }})
    

@dataclass_json
@dataclass
class BulkResponse:
    data: BulkResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
