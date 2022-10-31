package shared



type SchemeClientID struct {
    APIKey string `security:"name=PLAID-CLIENT-ID"`
    
}

type SchemePlaidVersion struct {
    APIKey string `security:"name=Plaid-Version"`
    
}

type SchemeSecret struct {
    APIKey string `security:"name=PLAID-SECRET"`
    
}

type Security struct {
    ClientID SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    PlaidVersion SchemePlaidVersion `security:"scheme,type=apiKey,subtype=header"`
    Secret SchemeSecret `security:"scheme,type=apiKey,subtype=header"`
    
}

