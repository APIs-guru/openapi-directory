from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PhotoResultThumbnail:
    r"""PhotoResultThumbnail
    Photo thumbnail data.
    """
    
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class PhotoResult:
    r"""PhotoResult
    The result of uploading or editing a photo.
    """
    
    photo_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photo_id') }})
    thumbnail: Optional[PhotoResultThumbnail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    
