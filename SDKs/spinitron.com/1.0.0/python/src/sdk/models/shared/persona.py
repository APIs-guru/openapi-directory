from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PersonaLinks:
    self: Optional[Link] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    shows: Optional[List[Link]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shows') }})
    

@dataclass_json
@dataclass
class Persona:
    r"""Persona
    The `Persona` object describes a radio DJ/host. One person can have multiple personas
    """
    
    links: Optional[PersonaLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    bio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    since: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('since') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
