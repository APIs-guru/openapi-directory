package shared



type SchemeJwt struct {
    Authorization string `security:"name=Authorization"`
    
}

type SchemeJwtRefresh struct {
    Authorization string `security:"name=Authorization"`
    
}

