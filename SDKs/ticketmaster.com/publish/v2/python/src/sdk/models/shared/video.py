from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Video:
    r"""Video
    This class defines an entitlement data on the Publish API
    """
    
    licensing_information: LicensingInformation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('licensingInformation') }})
    source: Source = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    embed_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embedUrl') }})
    
