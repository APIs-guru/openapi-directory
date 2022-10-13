from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import publicidentifier


@dataclass_json
@dataclass
class InvoiceRecipientPreflight:
    public_identifiers: Optional[List[publicidentifier.PublicIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicIdentifiers' }})
    
