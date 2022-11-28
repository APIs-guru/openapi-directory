import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OperationalDisconnectProblemDisconnectTypeEnum {
    OperationalDisconnect = "OperationalDisconnect",
    UpstreamOperationalDisconnect = "UpstreamOperationalDisconnect",
    ForceDisconnect = "ForceDisconnect",
    UpstreamUncleanDisconnect = "UpstreamUncleanDisconnect",
    SlowReader = "SlowReader",
    InternalError = "InternalError",
    PackageUpgraded = "PackageUpgraded",
    PackageDowngraded = "PackageDowngraded",
    ClientApplicationStateDegraded = "ClientApplicationStateDegraded"
}


// OperationalDisconnectProblem
/** 
 * You have been disconnected for operational reasons.
**/
export class OperationalDisconnectProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=disconnect_type" })
  disconnectType?: OperationalDisconnectProblemDisconnectTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
