package shared



type CreateContinuousCheckInput struct {
    CheckID *string `form:"name=check_id"`
    Frequency *string `form:"name=frequency"`
    Status *string `form:"name=status"`
    
}

