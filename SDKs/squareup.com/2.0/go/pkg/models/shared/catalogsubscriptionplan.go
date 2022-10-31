package shared



type CatalogSubscriptionPlan struct {
    Name string `json:"name"`
    Phases []SubscriptionPhase `json:"phases"`
    
}

