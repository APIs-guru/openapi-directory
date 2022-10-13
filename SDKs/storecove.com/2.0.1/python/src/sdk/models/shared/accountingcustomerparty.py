from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import party
from . import publicidentifier


@dataclass_json
@dataclass
class AccountingCustomerParty:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    party: party.Party = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party' }})
    public_identifiers: Optional[List[publicidentifier.PublicIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicIdentifiers' }})
    
