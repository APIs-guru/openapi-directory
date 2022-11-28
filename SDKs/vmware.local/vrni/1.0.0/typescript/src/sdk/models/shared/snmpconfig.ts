import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snmp2cConfig } from "./snmp2cconfig";
import { Snmp3Config } from "./snmp3config";


export enum SnmpConfigSnmpVersionEnum {
    V2c = "v2c",
    V3 = "v3"
}


export class SnmpConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config_snmp_2c" })
  configSnmp2c?: Snmp2cConfig;

  @SpeakeasyMetadata({ data: "json, name=config_snmp_3" })
  configSnmp3?: Snmp3Config;

  @SpeakeasyMetadata({ data: "json, name=snmp_enabled" })
  snmpEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=snmp_version" })
  snmpVersion?: SnmpConfigSnmpVersionEnum;
}
