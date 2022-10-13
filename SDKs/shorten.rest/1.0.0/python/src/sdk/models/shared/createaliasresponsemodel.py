from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateAliasResponseModel:
    alias_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliasName' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    short_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortUrl' }})
    
