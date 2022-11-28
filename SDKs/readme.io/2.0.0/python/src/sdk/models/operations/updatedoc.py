from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from sdk.models import shared


@dataclass
class UpdateDocPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDocHeaders:
    x_readme_version: str = field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDocSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDocRequest:
    headers: UpdateDocHeaders = field()
    path_params: UpdateDocPathParams = field()
    request: shared.Doc = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateDocSecurity = field()
    

@dataclass
class UpdateDocResponse:
    content_type: str = field()
    status_code: int = field()
    
