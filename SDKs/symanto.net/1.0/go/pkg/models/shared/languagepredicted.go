package shared



type LanguagePredicted struct {
    DetectedLanguage string `json:"detected_language"`
    ID *string `json:"id,omitempty"`
    
}

