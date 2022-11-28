from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class TopicSentimentDomainEnum(str, Enum):
    ECOM = "Ecom"
    EMPLOYEE = "Employee"
    HOTEL = "Hotel"
    RESTAURANT = "Restaurant"


@dataclass
class TopicSentimentQueryParams:
    domain: Optional[TopicSentimentDomainEnum] = field(default=None, metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    

@dataclass
class TopicSentimentRequest:
    query_params: TopicSentimentQueryParams = field()
    request: Optional[List[shared.Post]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TopicSentimentResponse:
    content_type: str = field()
    status_code: int = field()
    topic_sentiment_response: Optional[List[shared.TopicSentimentOutput]] = field(default=None)
    
