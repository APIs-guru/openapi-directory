package shared



type VMSpecs struct {
    DiskType int32 `json:"diskType"`
    ImageResourceID string `json:"imageResourceId"`
    Size string `json:"size"`
    SubnetResourceID string `json:"subnetResourceId"`
    
}

