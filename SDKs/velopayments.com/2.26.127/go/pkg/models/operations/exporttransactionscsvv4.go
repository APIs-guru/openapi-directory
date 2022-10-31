package operations

import (
	"time"
)

type ExportTransactionsCsvv4IncludeEnum string

const (
	ExportTransactionsCsvv4IncludeEnumPayorOnly           ExportTransactionsCsvv4IncludeEnum = "payorOnly"
	ExportTransactionsCsvv4IncludeEnumPayorAndDescendants ExportTransactionsCsvv4IncludeEnum = "payorAndDescendants"
)

type ExportTransactionsCsvv4QueryParams struct {
	EndDate   *time.Time                          `queryParam:"style=form,explode=true,name=endDate"`
	Include   *ExportTransactionsCsvv4IncludeEnum `queryParam:"style=form,explode=true,name=include"`
	PayorID   *string                             `queryParam:"style=form,explode=true,name=payorId"`
	StartDate *time.Time                          `queryParam:"style=form,explode=true,name=startDate"`
}

type ExportTransactionsCsvv4Request struct {
	QueryParams ExportTransactionsCsvv4QueryParams
}

type ExportTransactionsCsvv4Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
