import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValuesInPastMultipleGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ValuesInPastMultipleGetQueryParams extends SpeakeasyBase {
    endDate: Date;
    interval: number;
    startDate: Date;
}
export declare class ValuesInPastMultipleGetRequest extends SpeakeasyBase {
    pathParams: ValuesInPastMultipleGetPathParams;
    queryParams: ValuesInPastMultipleGetQueryParams;
}
export declare class ValuesInPastMultipleGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    valuesData?: shared.ValuesData[];
}
