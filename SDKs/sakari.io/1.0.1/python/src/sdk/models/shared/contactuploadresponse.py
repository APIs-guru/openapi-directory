from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contact
from . import contact


@dataclass_json
@dataclass
class ContactUploadResponseData:
    contacts: Optional[List[contact.Contact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contacts' }})
    errors: Optional[List[contact.Contact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    inserted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inserted' }})
    submitted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submitted' }})
    success: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    updated: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    

@dataclass_json
@dataclass
class ContactUploadResponse:
    data: Optional[ContactUploadResponseData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
