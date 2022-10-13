package shared

type V3Outlet struct {
	OutletBusiness         *string  `json:"outlet_business"`
	OutletBusinessHourFri  *string  `json:"outlet_business_hour_fri"`
	OutletBusinessHourMon  *string  `json:"outlet_business_hour_mon"`
	OutletBusinessHourSat  *string  `json:"outlet_business_hour_sat"`
	OutletBusinessHourSun  *string  `json:"outlet_business_hour_sun"`
	OutletBusinessHourThur *string  `json:"outlet_business_hour_thur"`
	OutletBusinessHourTue  *string  `json:"outlet_business_hour_tue"`
	OutletBusinessHourWed  *string  `json:"outlet_business_hour_wed"`
	OutletLatitude         *float32 `json:"outlet_latitude"`
	OutletLongitude        *float32 `json:"outlet_longitude"`
	OutletName             *string  `json:"outlet_name"`
	OutletNotes            *string  `json:"outlet_notes"`
	OutletPostcode         *int32   `json:"outlet_postcode"`
	OutletSlidSpid         *string  `json:"outlet_slid_spid"`
	OutletSuburb           *string  `json:"outlet_suburb"`
}
