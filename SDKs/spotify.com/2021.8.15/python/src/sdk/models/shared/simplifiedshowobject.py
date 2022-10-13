from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import copyrightobject
from . import externalurlobject
from . import imageobject


@dataclass_json
@dataclass
class SimplifiedShowObject:
    available_markets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_markets' }})
    copyrights: Optional[List[copyrightobject.CopyrightObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyrights' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    explicit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicit' }})
    external_urls: Optional[externalurlobject.ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_urls' }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    html_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[List[imageobject.ImageObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    is_externally_hosted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_externally_hosted' }})
    languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media_type' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
