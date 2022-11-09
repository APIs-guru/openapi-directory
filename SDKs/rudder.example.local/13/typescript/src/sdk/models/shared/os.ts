import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OsNameEnum {
    Debian = "debian"
,    Kali = "kali"
,    Ubuntu = "ubuntu"
,    Redhat = "redhat"
,    Centos = "centos"
,    Fedora = "fedora"
,    Suse = "suse"
,    Oracle = "oracle"
,    Scientific = "scientific"
,    Slackware = "slackware"
,    Xp = "xp"
,    Vista = "vista"
,    Seven = "seven"
,    Ten = "10"
,    TwoThousand = "2000"
,    TwoThousandAndThree = "2003"
,    TwoThousandAndEightR2 = "2008 r2"
,    TwoThousandAndTwelve = "2012"
,    TwoThousandAndTwelveR2 = "2012 r2"
,    TwoThousandAndSixteen = "2016"
}

export enum OsTypeEnum {
    Linux = "linux"
,    Windows = "windows"
,    Solaris = "solaris"
,    Aix = "aix"
,    Freebsd = "freebsd"
,    Unknown = "unknown"
}


export class Os extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullName" })
  fullName: string;

  @Metadata({ data: "json, name=name" })
  name: OsNameEnum;

  @Metadata({ data: "json, name=servicePack" })
  servicePack?: string;

  @Metadata({ data: "json, name=type" })
  type: OsTypeEnum;

  @Metadata({ data: "json, name=version" })
  version: string;
}
