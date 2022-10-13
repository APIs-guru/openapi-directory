from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PersonalizationInfoBody:
    dotfiles_install_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dotfilesInstallCommand' }})
    dotfiles_repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dotfilesRepository' }})
    dotfiles_target_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dotfilesTargetPath' }})
    
