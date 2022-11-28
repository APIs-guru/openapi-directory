package shared

// RatingCounts
// **dictionary** of rating (stars) to number of reviews with each rating for *this* product"
//
// users rate products by assigning a star-rating from 1-5; these values show the total number of reviews for each of the star ratings (up to a maximum given in the `reviewCount` field in this response)
//
// - **note**: see response sample for structure
type RatingCounts struct {
	One   *float64 `json:"1,omitempty"`
	Two   *float64 `json:"2,omitempty"`
	Three *float64 `json:"3,omitempty"`
	Four  *float64 `json:"4,omitempty"`
	Five  *float64 `json:"5,omitempty"`
}
