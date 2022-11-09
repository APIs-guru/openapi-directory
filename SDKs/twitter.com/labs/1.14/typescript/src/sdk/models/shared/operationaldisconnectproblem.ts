import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OperationalDisconnectProblemDisconnectTypeEnum {
    OperationalDisconnect = "OperationalDisconnect"
,    UpstreamOperationalDisconnect = "UpstreamOperationalDisconnect"
,    ForceDisconnect = "ForceDisconnect"
,    UpstreamUncleanDisconnect = "UpstreamUncleanDisconnect"
,    SlowReader = "SlowReader"
,    InternalError = "InternalError"
,    PackageUpgraded = "PackageUpgraded"
,    PackageDowngraded = "PackageDowngraded"
,    ClientApplicationStateDegraded = "ClientApplicationStateDegraded"
}


// OperationalDisconnectProblem
/** 
 * You have been disconnected for operational reasons.
**/
export class OperationalDisconnectProblem extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=disconnect_type" })
  disconnectType?: OperationalDisconnectProblemDisconnectTypeEnum;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
