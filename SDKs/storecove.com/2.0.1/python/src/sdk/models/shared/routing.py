from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import routingidentifier


@dataclass_json
@dataclass
class Routing:
    e_identifiers: Optional[List[routingidentifier.RoutingIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eIdentifiers' }})
    emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    
