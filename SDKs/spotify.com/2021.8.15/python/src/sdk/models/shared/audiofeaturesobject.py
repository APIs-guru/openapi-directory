from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AudioFeaturesObject:
    acousticness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acousticness' }})
    analysis_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysis_url' }})
    danceability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'danceability' }})
    duration_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration_ms' }})
    energy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energy' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    instrumentalness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instrumentalness' }})
    key: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    liveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liveness' }})
    loudness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loudness' }})
    mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    speechiness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speechiness' }})
    tempo: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tempo' }})
    time_signature: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_signature' }})
    track_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'track_href' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    valence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valence' }})
    
