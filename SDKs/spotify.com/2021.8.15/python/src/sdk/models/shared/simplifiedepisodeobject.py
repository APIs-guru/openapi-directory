from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import externalurlobject
from . import imageobject
from . import episoderestrictionobject
from . import resumepointobject


@dataclass_json
@dataclass
class SimplifiedEpisodeObject:
    audio_preview_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_preview_url' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    duration_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration_ms' }})
    explicit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicit' }})
    external_urls: Optional[externalurlobject.ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_urls' }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    html_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[List[imageobject.ImageObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    is_externally_hosted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_externally_hosted' }})
    is_playable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_playable' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release_date' }})
    release_date_precision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release_date_precision' }})
    restrictions: Optional[episoderestrictionobject.EpisodeRestrictionObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictions' }})
    resume_point: Optional[resumepointobject.ResumePointObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resume_point' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
