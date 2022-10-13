from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import color
from . import color
from . import logo
from . import logo


@dataclass_json
@dataclass
class BrandingConf:
    bar_color: color.Color = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barColor' }})
    display_bar: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayBar' }})
    display_bar_login: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayBarLogin' }})
    display_label: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayLabel' }})
    display_motd: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayMotd' }})
    label_color: color.Color = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelColor' }})
    label_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelText' }})
    motd: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'motd' }})
    small_logo: logo.Logo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smallLogo' }})
    wide_logo: logo.Logo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wideLogo' }})
    
