import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPayeeChangesV3QueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    payorId: string;
    updatedSince: Date;
}
export declare class ListPayeeChangesV3Request extends SpeakeasyBase {
    queryParams: ListPayeeChangesV3QueryParams;
}
export declare class ListPayeeChangesV3Response extends SpeakeasyBase {
    contentType: string;
    payeeDeltaResponse?: shared.PayeeDeltaResponse;
    statusCode: number;
}
