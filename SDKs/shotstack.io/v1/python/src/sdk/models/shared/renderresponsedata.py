from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import edit

class RenderResponseDataStatusEnum(str, Enum):
    QUEUED = "queued"
    FETCHING = "fetching"
    RENDERING = "rendering"
    SAVING = "saving"
    DONE = "done"
    FAILED = "failed"


@dataclass_json
@dataclass
class RenderResponseData:
    created: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    data: edit.Edit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    owner: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    plan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    poster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poster' }})
    render_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renderTime' }})
    status: RenderResponseDataStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail' }})
    updated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
