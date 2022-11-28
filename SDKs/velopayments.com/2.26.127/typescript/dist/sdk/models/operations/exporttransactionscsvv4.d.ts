import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ExportTransactionsCsvv4IncludeEnum {
    PayorOnly = "payorOnly",
    PayorAndDescendants = "payorAndDescendants"
}
export declare class ExportTransactionsCsvv4QueryParams extends SpeakeasyBase {
    endDate?: Date;
    include?: ExportTransactionsCsvv4IncludeEnum;
    payorId?: string;
    startDate?: Date;
}
export declare class ExportTransactionsCsvv4Request extends SpeakeasyBase {
    queryParams: ExportTransactionsCsvv4QueryParams;
}
export declare class ExportTransactionsCsvv4Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
