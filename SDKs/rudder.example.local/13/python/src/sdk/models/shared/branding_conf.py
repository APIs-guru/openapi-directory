from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BrandingConf:
    bar_color: Color = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('barColor') }})
    display_bar: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayBar') }})
    display_bar_login: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayBarLogin') }})
    display_label: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayLabel') }})
    display_motd: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayMotd') }})
    label_color: Color = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelColor') }})
    label_text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelText') }})
    motd: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('motd') }})
    small_logo: Logo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('smallLogo') }})
    wide_logo: Logo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wideLogo') }})
    
