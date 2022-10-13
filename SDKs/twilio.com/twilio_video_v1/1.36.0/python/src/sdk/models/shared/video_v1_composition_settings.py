from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoV1CompositionSettings:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    aws_credentials_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aws_credentials_sid' }})
    aws_s3_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aws_s3_url' }})
    aws_storage_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aws_storage_enabled' }})
    encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryption_enabled' }})
    encryption_key_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryption_key_sid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
