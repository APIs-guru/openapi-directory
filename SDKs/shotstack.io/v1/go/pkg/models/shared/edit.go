package shared

type EditDiskEnum string

const (
	EditDiskEnumLocal EditDiskEnum = "local"
	EditDiskEnumMount EditDiskEnum = "mount"
)

type Edit struct {
	Callback *string       `json:"callback,omitempty"`
	Disk     *EditDiskEnum `json:"disk,omitempty"`
	Output   Output        `json:"output"`
	Timeline Timeline      `json:"timeline"`
}
