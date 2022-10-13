from dataclasses import dataclass, field



@dataclass
class GetFeedbackFeedbackIDPathParams:
    feedback_id: str = field(default=None, metadata={'path_param': { 'field_name': 'feedback_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFeedbackFeedbackIDRequest:
    path_params: GetFeedbackFeedbackIDPathParams = field(default=None)
    

@dataclass
class GetFeedbackFeedbackIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
