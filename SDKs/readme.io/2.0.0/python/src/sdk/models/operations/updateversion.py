from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from sdk.models import shared


@dataclass
class UpdateVersionPathParams:
    version_id: str = field(metadata={'path_param': { 'field_name': 'versionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateVersionSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateVersionRequest:
    path_params: UpdateVersionPathParams = field()
    request: shared.Version = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateVersionSecurity = field()
    

@dataclass
class UpdateVersionResponse:
    content_type: str = field()
    status_code: int = field()
    
