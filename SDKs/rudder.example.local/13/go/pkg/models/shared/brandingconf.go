package shared



type BrandingConf struct {
    BarColor Color `json:"barColor"`
    DisplayBar bool `json:"displayBar"`
    DisplayBarLogin bool `json:"displayBarLogin"`
    DisplayLabel bool `json:"displayLabel"`
    DisplayMotd bool `json:"displayMotd"`
    LabelColor Color `json:"labelColor"`
    LabelText string `json:"labelText"`
    Motd string `json:"motd"`
    SmallLogo Logo `json:"smallLogo"`
    WideLogo Logo `json:"wideLogo"`
    
}

