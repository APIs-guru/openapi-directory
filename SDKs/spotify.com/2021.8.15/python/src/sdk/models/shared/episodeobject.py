from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EpisodeObject:
    r"""EpisodeObject

    https://developer.spotify.com/documentation/web-api/reference/#object-episodeobject - Find more info on the official Spotify Web API Reference
    """
    
    audio_preview_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_preview_url') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_ms') }})
    explicit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicit') }})
    external_urls: Optional[ExternalURLObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_urls') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    html_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[List[ImageObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    is_externally_hosted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_externally_hosted') }})
    is_playable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_playable') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    release_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_date') }})
    release_date_precision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_date_precision') }})
    restrictions: Optional[EpisodeRestrictionObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    resume_point: Optional[ResumePointObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resume_point') }})
    show: Optional[SimplifiedShowObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
