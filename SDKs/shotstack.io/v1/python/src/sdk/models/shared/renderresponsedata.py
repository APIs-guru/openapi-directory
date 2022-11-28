from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""RenderResponseData
    The response data returned with the [RenderResponse](#tocs_renderresponse) including status and URL.
    """
    
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    data: Edit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    owner: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    status: RenderResponseDataStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    plan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    poster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poster') }})
    render_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renderTime') }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
