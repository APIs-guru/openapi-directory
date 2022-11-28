import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum Snmp3ConfigAuthenticationTypeEnum {
    NoAuth = "NO_AUTH",
    Md5 = "MD5",
    Sha = "SHA"
}

export enum Snmp3ConfigPrivacyTypeEnum {
    Aes = "AES",
    Des = "DES",
    Aes128 = "AES128",
    Aes192 = "AES192",
    Aes256 = "AES256",
    ThreeDes = "3DES",
    NoPriv = "NO_PRIV"
}


export class Snmp3Config extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authentication_password" })
  authenticationPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=authentication_type" })
  authenticationType?: Snmp3ConfigAuthenticationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=context_name" })
  contextName?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy_password" })
  privacyPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy_type" })
  privacyType?: Snmp3ConfigPrivacyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
