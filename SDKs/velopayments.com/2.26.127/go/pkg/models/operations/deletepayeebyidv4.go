package operations



type DeletePayeeByIDV4PathParams struct {
    PayeeID string `pathParam:"style=simple,explode=false,name=payeeId"`
    
}

type DeletePayeeByIDV4Request struct {
    PathParams DeletePayeeByIDV4PathParams 
    
}

type DeletePayeeByIDV4Response struct {
    ContentType string 
    StatusCode int64 
    
}

