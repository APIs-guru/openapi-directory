from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AudioFeaturesObject:
    r"""AudioFeaturesObject

    https://developer.spotify.com/documentation/web-api/reference/#object-audiofeaturesobject - Find more info on the official Spotify Web API Reference
    """
    
    acousticness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acousticness') }})
    analysis_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysis_url') }})
    danceability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('danceability') }})
    duration_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_ms') }})
    energy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energy') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instrumentalness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instrumentalness') }})
    key: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    liveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveness') }})
    loudness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loudness') }})
    mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    speechiness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speechiness') }})
    tempo: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempo') }})
    time_signature: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_signature') }})
    track_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('track_href') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    valence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valence') }})
    
