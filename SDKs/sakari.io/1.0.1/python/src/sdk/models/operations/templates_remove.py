from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TemplatesRemovePathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    template_id: str = field(metadata={'path_param': { 'field_name': 'templateId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TemplatesRemoveSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class TemplatesRemove200ApplicationJSON:
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass
class TemplatesRemoveRequest:
    path_params: TemplatesRemovePathParams = field()
    security: TemplatesRemoveSecurity = field()
    

@dataclass
class TemplatesRemoveResponse:
    content_type: str = field()
    status_code: int = field()
    templates_remove_200_application_json_object: Optional[TemplatesRemove200ApplicationJSON] = field(default=None)
    
