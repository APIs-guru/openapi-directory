from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TagResourceRelationshipsTransactionsLinks:
    related: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related' }})
    

@dataclass_json
@dataclass
class TagResourceRelationshipsTransactions:
    links: Optional[TagResourceRelationshipsTransactionsLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    

@dataclass_json
@dataclass
class TagResourceRelationships:
    transactions: TagResourceRelationshipsTransactions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    

@dataclass_json
@dataclass
class TagResource:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    relationships: TagResourceRelationships = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
