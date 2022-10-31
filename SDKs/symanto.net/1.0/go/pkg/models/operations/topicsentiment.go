package operations

import (
"openapi/pkg/models/shared")


type TopicSentimentDomainEnum string

const (
    TopicSentimentDomainEnumEcom TopicSentimentDomainEnum = "Ecom"
TopicSentimentDomainEnumEmployee TopicSentimentDomainEnum = "Employee"
TopicSentimentDomainEnumHotel TopicSentimentDomainEnum = "Hotel"
TopicSentimentDomainEnumRestaurant TopicSentimentDomainEnum = "Restaurant"
)


type TopicSentimentQueryParams struct {
    Domain *TopicSentimentDomainEnum `queryParam:"style=form,explode=true,name=domain"`
    
}

type TopicSentimentRequest struct {
    QueryParams TopicSentimentQueryParams 
    Request []shared.Post `request:"mediaType=application/json"`
    
}

type TopicSentimentResponse struct {
    ContentType string 
    StatusCode int64 
    TopicSentimentResponse []shared.TopicSentimentOutput 
    
}

