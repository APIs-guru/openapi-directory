from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PhotoImages:
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class Photo:
    blurhash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blurhash') }})
    images: Optional[List[PhotoImages]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    photo_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photo_id') }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
