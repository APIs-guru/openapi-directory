from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import story_collaborator
from . import ooxml_document
from . import story_outline_history


@dataclass_json
@dataclass
class Story:
    collaborators: Optional[List[story_collaborator.StoryCollaborator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collaborators' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_public' }})
    ooxml_documents: Optional[List[ooxml_document.OoxmlDocument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ooxml_documents' }})
    outline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outline' }})
    outline_history: Optional[List[story_outline_history.StoryOutlineHistory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outline_history' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    
