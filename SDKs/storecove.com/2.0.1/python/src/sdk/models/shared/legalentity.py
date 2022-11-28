from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LegalEntityDocumentTypeEnum(str, Enum):
    INVOICE = "invoice"
    INVOICE_RESPONSE = "invoice_response"


@dataclass_json
@dataclass
class LegalEntity:
    advertisements: Optional[List[LegalEntityDocumentTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertisements') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[CountryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('county') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line1') }})
    line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line2') }})
    party_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party_name') }})
    peppol_identifiers: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peppol_identifiers') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant_id') }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    
