from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from sdk.models import shared


@dataclass
class UpdateChangelogPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateChangelogSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateChangelogRequest:
    path_params: UpdateChangelogPathParams = field()
    request: shared.Changelog = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateChangelogSecurity = field()
    

@dataclass
class UpdateChangelogResponse:
    content_type: str = field()
    status_code: int = field()
    
