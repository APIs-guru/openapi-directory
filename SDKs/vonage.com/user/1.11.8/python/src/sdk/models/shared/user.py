from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contact
from . import userextension


@dataclass_json
@dataclass
class User:
    contact_numbers: Optional[List[contact.Contact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_numbers' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    extensions: Optional[List[userextension.UserExtension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extensions' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    login_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login_name' }})
    
