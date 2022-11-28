import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeterFolderInformationGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class MeterFolderInformationGetRequest extends SpeakeasyBase {
    pathParams: MeterFolderInformationGetPathParams;
}
export declare class MeterFolderInformationGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    meterFolderInformation?: shared.MeterFolderInformation;
    statusCode: number;
}
