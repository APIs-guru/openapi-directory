from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import taginputresourceidentifier


@dataclass_json
@dataclass
class UpdateTransactionTagsRequest:
    data: List[taginputresourceidentifier.TagInputResourceIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
