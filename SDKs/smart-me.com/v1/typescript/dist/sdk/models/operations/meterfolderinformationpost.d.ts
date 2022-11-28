import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeterFolderInformationPostRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    meterFolderInformationToPost?: shared.MeterFolderInformationToPost;
    meterFolderInformationToPost1?: shared.MeterFolderInformationToPost;
    meterFolderInformationToPost2?: shared.MeterFolderInformationToPost;
    textXml: Uint8Array;
}
export declare class MeterFolderInformationPostRequest extends SpeakeasyBase {
    request: MeterFolderInformationPostRequests;
}
export declare class MeterFolderInformationPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
