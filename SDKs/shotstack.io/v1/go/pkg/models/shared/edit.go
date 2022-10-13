package shared

type EditDiskEnum string

const (
	EditDiskEnumLocal EditDiskEnum = "local"
	EditDiskEnumMount EditDiskEnum = "mount"
)

type Edit struct {
	Callback *string       `json:"callback"`
	Disk     *EditDiskEnum `json:"disk"`
	Output   Output        `json:"output"`
	Timeline Timeline      `json:"timeline"`
}
