import { SpeakeasyBase } from "../../../internal/utils";
export declare class ExportTransactionsCsvv3QueryParams extends SpeakeasyBase {
    endDate?: Date;
    payorId?: string;
    startDate?: Date;
}
export declare class ExportTransactionsCsvv3Request extends SpeakeasyBase {
    queryParams: ExportTransactionsCsvv3QueryParams;
}
export declare class ExportTransactionsCsvv3Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
}
