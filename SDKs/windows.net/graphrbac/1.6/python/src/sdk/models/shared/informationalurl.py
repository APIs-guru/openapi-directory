from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InformationalURL:
    r"""InformationalURL
    Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.
    """
    
    marketing: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketing') }})
    privacy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    support: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support') }})
    terms_of_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsOfService') }})
    
