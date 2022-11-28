import { SpeakeasyBase } from "../../../internal/utils";
export declare class BulkResponseDataBulk extends SpeakeasyBase {
    duplicateImportIds: string[];
    transactionIds: string[];
}
export declare class BulkResponseData extends SpeakeasyBase {
    bulk: BulkResponseDataBulk;
}
export declare class BulkResponse extends SpeakeasyBase {
    data: BulkResponseData;
}
