import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OperationalDisconnectProblemDisconnectTypeEnum {
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
/**
 * You have been disconnected for operational reasons.
**/
export declare class OperationalDisconnectProblem extends SpeakeasyBase {
    detail: string;
    disconnectType?: OperationalDisconnectProblemDisconnectTypeEnum;
    title: string;
    type: string;
}
