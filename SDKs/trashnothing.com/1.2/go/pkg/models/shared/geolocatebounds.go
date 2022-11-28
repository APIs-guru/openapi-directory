package shared

// GeolocateBounds
// Two bounding boxes that make using Google Maps' geocoder easier. <br /><br /> The default bounding box defines the area in which the post is probably located.  This is useful for providing a bounds to Google Maps geocoder. <br /><br /> The limit bounding box is a larger bounding box that contains the default bounding box. This is useful for discarding Google Maps geocoding results that are outside of this bounding box.
type GeolocateBounds struct {
	Default *BoundingBox `json:"default,omitempty"`
	Limit   *BoundingBox `json:"limit,omitempty"`
}
