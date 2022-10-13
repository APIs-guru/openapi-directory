from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SubmitUserFeedbackPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubmitUserFeedbackRequestBody:
    category: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'category' }})
    content: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'content' }})
    positive: int = field(default=None, metadata={'multipart_form': { 'field_name': 'positive' }})
    

@dataclass
class SubmitUserFeedbackRequest:
    path_params: SubmitUserFeedbackPathParams = field(default=None)
    request: SubmitUserFeedbackRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclass
class SubmitUserFeedback200ApplicationJSON:
    feedback: Optional[shared.Feedback] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedback' }})
    user: Optional[shared.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass
class SubmitUserFeedbackResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    submit_user_feedback_200_application_json_object: Optional[SubmitUserFeedback200ApplicationJSON] = field(default=None)
    
