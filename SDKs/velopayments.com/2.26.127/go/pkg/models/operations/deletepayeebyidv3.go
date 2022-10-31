package operations



type DeletePayeeByIDV3PathParams struct {
    PayeeID string `pathParam:"style=simple,explode=false,name=payeeId"`
    
}

type DeletePayeeByIDV3Request struct {
    PathParams DeletePayeeByIDV3PathParams 
    
}

type DeletePayeeByIDV3Response struct {
    ContentType string 
    StatusCode int64 
    
}

