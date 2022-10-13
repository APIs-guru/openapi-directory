from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomPage:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden' }})
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    htmlmode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'htmlmode' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
