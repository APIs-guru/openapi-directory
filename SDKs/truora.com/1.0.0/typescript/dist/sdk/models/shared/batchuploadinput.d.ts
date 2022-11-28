import { SpeakeasyBase } from "../../../internal/utils";
export declare class BatchUploadInputFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
/**
 * Represents the parameters required to perform a batch upload
**/
export declare class BatchUploadInput extends SpeakeasyBase {
    file: BatchUploadInputFile[];
}
