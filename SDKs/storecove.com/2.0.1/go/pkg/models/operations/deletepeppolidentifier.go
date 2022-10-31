package operations



type DeletePeppolIdentifierPathParams struct {
    Identifier string `pathParam:"style=simple,explode=false,name=identifier"`
    LegalEntityID int64 `pathParam:"style=simple,explode=false,name=legal_entity_id"`
    Scheme string `pathParam:"style=simple,explode=false,name=scheme"`
    Superscheme string `pathParam:"style=simple,explode=false,name=superscheme"`
    
}

type DeletePeppolIdentifierRequest struct {
    PathParams DeletePeppolIdentifierPathParams 
    
}

type DeletePeppolIdentifierResponse struct {
    ContentType string 
    StatusCode int64 
    
}

