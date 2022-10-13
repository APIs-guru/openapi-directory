from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PagedResultsPublicContinuationToken:
    next_partition_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPartitionKey' }})
    next_row_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextRowKey' }})
    next_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextTableName' }})
    
