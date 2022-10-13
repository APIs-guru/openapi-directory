package shared

type V3OutletResponse struct {
	Outlets []V3Outlet `json:"outlets"`
	Status  *V3Status  `json:"status"`
}
