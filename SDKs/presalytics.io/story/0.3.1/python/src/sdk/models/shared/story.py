from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Story:
    r"""Story
    Model for story objects
    """
    
    collaborators: Optional[List[StoryCollaborator]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborators') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_public') }})
    ooxml_documents: Optional[List[OoxmlDocument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ooxml_documents') }})
    outline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outline') }})
    outline_history: Optional[List[StoryOutlineHistory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outline_history') }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    
