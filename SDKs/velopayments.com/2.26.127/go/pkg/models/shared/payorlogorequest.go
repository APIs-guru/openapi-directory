package shared



type PayorLogoRequestLogo struct {
    Content []byte `multipartForm:"content"`
    Logo string `multipartForm:"name=logo"`
    
}

type PayorLogoRequest struct {
    Logo *PayorLogoRequestLogo `multipartForm:"file"`
    
}

