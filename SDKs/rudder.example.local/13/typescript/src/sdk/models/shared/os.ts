import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OsNameEnum {
    Debian = "debian",
    Kali = "kali",
    Ubuntu = "ubuntu",
    Redhat = "redhat",
    Centos = "centos",
    Fedora = "fedora",
    Suse = "suse",
    Oracle = "oracle",
    Scientific = "scientific",
    Slackware = "slackware",
    Xp = "xp",
    Vista = "vista",
    Seven = "seven",
    Ten = "10",
    TwoThousand = "2000",
    TwoThousandAndThree = "2003",
    TwoThousandAndEightR2 = "2008 r2",
    TwoThousandAndTwelve = "2012",
    TwoThousandAndTwelveR2 = "2012 r2",
    TwoThousandAndSixteen = "2016"
}

export enum OsTypeEnum {
    Linux = "linux",
    Windows = "windows",
    Solaris = "solaris",
    Aix = "aix",
    Freebsd = "freebsd",
    Unknown = "unknown"
}


export class Os extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: OsNameEnum;

  @SpeakeasyMetadata({ data: "json, name=servicePack" })
  servicePack?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: OsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
