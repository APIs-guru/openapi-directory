from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FolderMenuConfiguration:
    r"""FolderMenuConfiguration
    Container Class for the Web API representing a folder menu and it's items
    """
    
    browser_time_zone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BrowserTimeZoneName') }})
    browser_utc_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BrowserUtcTime') }})
    items: Optional[List[FolderMenuItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    
