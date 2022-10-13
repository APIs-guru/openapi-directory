from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaxIds:
    eu_vat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eu_vat' }})
    fr_naf: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fr_naf' }})
    fr_siret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fr_siret' }})
    
