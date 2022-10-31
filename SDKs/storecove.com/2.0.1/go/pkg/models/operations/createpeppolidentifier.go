package operations



type CreatePeppolIdentifierPathParams struct {
    LegalEntityID int64 `pathParam:"style=simple,explode=false,name=legal_entity_id"`
    
}

type CreatePeppolIdentifierRequest struct {
    PathParams CreatePeppolIdentifierPathParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type CreatePeppolIdentifierResponse struct {
    ContentType string 
    ErrorModels []interface{} 
    PeppolIdentifier *interface{} 
    StatusCode int64 
    
}

