from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetProfileImages200ApplicationJSON:
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

@dataclass
class GetProfileImagesResponse:
    content_type: str = field()
    status_code: int = field()
    get_profile_images_200_application_json_objects: Optional[List[GetProfileImages200ApplicationJSON]] = field(default=None)
    
