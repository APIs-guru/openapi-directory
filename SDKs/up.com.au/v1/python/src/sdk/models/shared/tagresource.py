from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagResourceRelationshipsTransactionsLinks:
    related: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclass
class TagResourceRelationshipsTransactions:
    links: Optional[TagResourceRelationshipsTransactionsLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclass
class TagResourceRelationships:
    transactions: TagResourceRelationshipsTransactions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    

@dataclass_json
@dataclass
class TagResource:
    r"""TagResource
    Provides information about a tag.
    
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: TagResourceRelationships = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
