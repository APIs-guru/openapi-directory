from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClickModel:
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    alias_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliasId' }})
    browser: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browser' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    referrer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referrer' }})
    user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgent' }})
    
