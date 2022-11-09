import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IncomeVerificationDocumentsDownloadRequest extends SpeakeasyBase {
    request: shared.IncomeVerificationDocumentsDownloadRequest;
}
export declare class IncomeVerificationDocumentsDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    incomeVerificationDocumentsDownload200ApplicationZipBinaryString?: Uint8Array;
}
