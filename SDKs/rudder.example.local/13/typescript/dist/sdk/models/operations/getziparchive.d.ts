import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetZipArchivePathParams extends SpeakeasyBase {
    archiveKind: shared.ArchiveKindEnum;
    commitId: string;
}
export declare class GetZipArchiveRequest extends SpeakeasyBase {
    pathParams: GetZipArchivePathParams;
}
export declare class GetZipArchiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getZipArchive200ApplicationOctetStreamBinaryString?: Uint8Array;
}
