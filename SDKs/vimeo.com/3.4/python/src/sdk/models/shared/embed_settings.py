from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EmbedSettingsButtons:
    embed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    fullscreen: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullscreen' }})
    hd: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hd' }})
    like: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'like' }})
    scaling: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaling' }})
    share: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'share' }})
    watchlater: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watchlater' }})
    

@dataclass_json
@dataclass
class EmbedSettingsLogosCustom:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    sticky: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky' }})
    

@dataclass_json
@dataclass
class EmbedSettingsLogos:
    custom: EmbedSettingsLogosCustom = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom' }})
    vimeo: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vimeo' }})
    
class EmbedSettingsTitleNameEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class EmbedSettingsTitleOwnerEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"

class EmbedSettingsTitlePortraitEnum(str, Enum):
    HIDE = "hide"
    SHOW = "show"
    USER = "user"


@dataclass_json
@dataclass
class EmbedSettingsTitle:
    name: EmbedSettingsTitleNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner: EmbedSettingsTitleOwnerEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    portrait: EmbedSettingsTitlePortraitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portrait' }})
    

@dataclass_json
@dataclass
class EmbedSettings:
    buttons: EmbedSettingsButtons = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buttons' }})
    color: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    logos: EmbedSettingsLogos = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logos' }})
    playbar: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playbar' }})
    speed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speed' }})
    title: EmbedSettingsTitle = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    volume: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume' }})
    
