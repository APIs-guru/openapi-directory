import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutApiV1EnvironmentsEnvironmentIdPortsPortPathParams extends SpeakeasyBase {
    environmentId: string;
    port: number;
}
export declare class PutApiV1EnvironmentsEnvironmentIdPortsPortRequests extends SpeakeasyBase {
    addForwardedPortSettings?: shared.AddForwardedPortSettings;
    addForwardedPortSettings1?: shared.AddForwardedPortSettings;
    addForwardedPortSettings2?: shared.AddForwardedPortSettings;
    addForwardedPortSettings3?: shared.AddForwardedPortSettings;
}
export declare class PutApiV1EnvironmentsEnvironmentIdPortsPortRequest extends SpeakeasyBase {
    pathParams: PutApiV1EnvironmentsEnvironmentIdPortsPortPathParams;
    request?: PutApiV1EnvironmentsEnvironmentIdPortsPortRequests;
}
export declare class PutApiV1EnvironmentsEnvironmentIdPortsPortResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    messageCodes?: number;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
