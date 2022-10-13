package shared

type OsNameEnum string

const (
	OsNameEnumDebian                 OsNameEnum = "debian"
	OsNameEnumKali                   OsNameEnum = "kali"
	OsNameEnumUbuntu                 OsNameEnum = "ubuntu"
	OsNameEnumRedhat                 OsNameEnum = "redhat"
	OsNameEnumCentos                 OsNameEnum = "centos"
	OsNameEnumFedora                 OsNameEnum = "fedora"
	OsNameEnumSuse                   OsNameEnum = "suse"
	OsNameEnumOracle                 OsNameEnum = "oracle"
	OsNameEnumScientific             OsNameEnum = "scientific"
	OsNameEnumSlackware              OsNameEnum = "slackware"
	OsNameEnumXp                     OsNameEnum = "xp"
	OsNameEnumVista                  OsNameEnum = "vista"
	OsNameEnumSeven                  OsNameEnum = "seven"
	OsNameEnumTen                    OsNameEnum = "10"
	OsNameEnumTwoThousand            OsNameEnum = "2000"
	OsNameEnumTwoThousandAndThree    OsNameEnum = "2003"
	OsNameEnumTwoThousandAndEightR2  OsNameEnum = "2008 r2"
	OsNameEnumTwoThousandAndTwelve   OsNameEnum = "2012"
	OsNameEnumTwoThousandAndTwelveR2 OsNameEnum = "2012 r2"
	OsNameEnumTwoThousandAndSixteen  OsNameEnum = "2016"
)

type OsTypeEnum string

const (
	OsTypeEnumLinux   OsTypeEnum = "linux"
	OsTypeEnumWindows OsTypeEnum = "windows"
	OsTypeEnumSolaris OsTypeEnum = "solaris"
	OsTypeEnumAix     OsTypeEnum = "aix"
	OsTypeEnumFreebsd OsTypeEnum = "freebsd"
	OsTypeEnumUnknown OsTypeEnum = "unknown"
)

type Os struct {
	FullName    string     `json:"fullName"`
	Name        OsNameEnum `json:"name"`
	ServicePack *string    `json:"servicePack"`
	Type        OsTypeEnum `json:"type"`
	Version     string     `json:"version"`
}
