from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import foldermenuitem


@dataclass_json
@dataclass
class FolderMenuConfiguration:
    browser_time_zone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BrowserTimeZoneName' }})
    browser_utc_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BrowserUtcTime' }})
    items: Optional[List[foldermenuitem.FolderMenuItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    
