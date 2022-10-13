from dataclasses import dataclass, field



@dataclass
class DiscussionAPIDeleteTopicPathParams:
    topic_id: int = field(default=None, metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DiscussionAPIDeleteTopicRequest:
    path_params: DiscussionAPIDeleteTopicPathParams = field(default=None)
    

@dataclass
class DiscussionAPIDeleteTopicResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
