from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EmbedSettingsButtons:
    r"""EmbedSettingsButtons
    A collection of information about the buttons that appear on the interface of the embeddable player.
    """
    
    embed: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    fullscreen: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullscreen') }})
    hd: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hd') }})
    like: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('like') }})
    scaling: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaling') }})
    share: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('share') }})
    watchlater: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlater') }})
    

@dataclass_json
@dataclass
class EmbedSettingsLogosCustom:
    r"""EmbedSettingsLogosCustom
    A collection of information relating to custom logos in the embeddable player.
    """
    
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    sticky: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky') }})
    

@dataclass_json
@dataclass
class EmbedSettingsLogos:
    r"""EmbedSettingsLogos
    A collection of information about the logo in the corner of the embeddable player.
    """
    
    custom: EmbedSettingsLogosCustom = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    vimeo: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vimeo') }})
    
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
    r"""EmbedSettingsTitle
    A collection of information relating to the embeddable player's title bar.
    """
    
    name: EmbedSettingsTitleNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: EmbedSettingsTitleOwnerEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    portrait: EmbedSettingsTitlePortraitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portrait') }})
    

@dataclass_json
@dataclass
class EmbedSettings:
    buttons: EmbedSettingsButtons = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    color: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    logos: EmbedSettingsLogos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logos') }})
    playbar: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('playbar') }})
    speed: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('speed') }})
    title: EmbedSettingsTitle = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    volume: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
