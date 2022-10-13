from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import licensinginformation
from . import source


@dataclass_json
@dataclass
class Video:
    embed_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embedUrl' }})
    licensing_information: licensinginformation.LicensingInformation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licensingInformation' }})
    source: source.Source = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
