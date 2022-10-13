from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayorBrandingResponse:
    collective_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectiveAlias' }})
    dba_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dbaName' }})
    logo_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logoUrl' }})
    payor_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorName' }})
    support_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportContact' }})
    
