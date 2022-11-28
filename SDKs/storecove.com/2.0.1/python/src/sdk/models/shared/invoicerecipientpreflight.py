from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InvoiceRecipientPreflight:
    r"""InvoiceRecipientPreflight
    Identifies the invoice recipient to preflight
    """
    
    public_identifiers: Optional[List[PublicIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicIdentifiers') }})
    
