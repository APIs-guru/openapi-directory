from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostCSSTemplateSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostCSSTemplateRequest:
    request: shared.CSSTemplateRestAPIPost = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostCSSTemplateSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostCSSTemplate201ApplicationJSON:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: Optional[shared.CSSTemplateRestAPIPost] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class PostCSSTemplate400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostCSSTemplate401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostCSSTemplate422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostCSSTemplate500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostCSSTemplateResponse:
    content_type: str = field(default=None)
    post_css_template_201_application_json_object: Optional[PostCSSTemplate201ApplicationJSON] = field(default=None)
    post_css_template_400_application_json_object: Optional[PostCSSTemplate400ApplicationJSON] = field(default=None)
    post_css_template_401_application_json_object: Optional[PostCSSTemplate401ApplicationJSON] = field(default=None)
    post_css_template_422_application_json_object: Optional[PostCSSTemplate422ApplicationJSON] = field(default=None)
    post_css_template_500_application_json_object: Optional[PostCSSTemplate500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
