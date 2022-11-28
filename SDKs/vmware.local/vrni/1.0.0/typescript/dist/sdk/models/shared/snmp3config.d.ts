import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Snmp3ConfigAuthenticationTypeEnum {
    NoAuth = "NO_AUTH",
    Md5 = "MD5",
    Sha = "SHA"
}
export declare enum Snmp3ConfigPrivacyTypeEnum {
    Aes = "AES",
    Des = "DES",
    Aes128 = "AES128",
    Aes192 = "AES192",
    Aes256 = "AES256",
    ThreeDes = "3DES",
    NoPriv = "NO_PRIV"
}
export declare class Snmp3Config extends SpeakeasyBase {
    authenticationPassword?: string;
    authenticationType?: Snmp3ConfigAuthenticationTypeEnum;
    contextName?: string;
    privacyPassword?: string;
    privacyType?: Snmp3ConfigPrivacyTypeEnum;
    username?: string;
}
