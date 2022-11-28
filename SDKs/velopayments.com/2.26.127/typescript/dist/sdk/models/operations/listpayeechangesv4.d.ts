import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPayeeChangesV4QueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    payorId: string;
    updatedSince: Date;
}
export declare class ListPayeeChangesV4Request extends SpeakeasyBase {
    queryParams: ListPayeeChangesV4QueryParams;
}
export declare class ListPayeeChangesV4Response extends SpeakeasyBase {
    contentType: string;
    payeeDeltaResponse2?: shared.PayeeDeltaResponse2;
    statusCode: number;
}
