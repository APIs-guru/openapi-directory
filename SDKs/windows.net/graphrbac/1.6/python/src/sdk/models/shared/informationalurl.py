from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InformationalURL:
    marketing: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketing' }})
    privacy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    support: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'support' }})
    terms_of_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsOfService' }})
    
