package shared

// SupplierParty
// A party that can send invoices
type SupplierParty struct {
	Contact *Contact `json:"contact,omitempty"`
}
