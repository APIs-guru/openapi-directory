package shared



type PlanResource struct {
    ID *string `json:"id,omitempty"`
    Identity *PlanResourceIdentity `json:"identity,omitempty"`
    Location *string `json:"location,omitempty"`
    Name *string `json:"name,omitempty"`
    Properties *PlanResourceProperties `json:"properties,omitempty"`
    ProvisioningState *string `json:"provisioningState,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

