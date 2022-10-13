from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import catalogobjectbatch


@dataclass_json
@dataclass
class BatchUpsertCatalogObjectsRequest:
    batches: List[catalogobjectbatch.CatalogObjectBatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batches' }})
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    
