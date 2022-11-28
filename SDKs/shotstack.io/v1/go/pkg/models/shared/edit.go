package shared

type EditDiskEnum string

const (
	EditDiskEnumLocal EditDiskEnum = "local"
	EditDiskEnumMount EditDiskEnum = "mount"
)

// Edit
// An edit defines the arrangement of a video on a timeline, an audio edit or an image design and the output format.
type Edit struct {
	Callback *string       `json:"callback,omitempty"`
	Disk     *EditDiskEnum `json:"disk,omitempty"`
	Output   Output        `json:"output"`
	Timeline Timeline      `json:"timeline"`
}
