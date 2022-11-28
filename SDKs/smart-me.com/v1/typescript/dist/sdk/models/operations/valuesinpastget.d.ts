import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValuesInPastGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ValuesInPastGetQueryParams extends SpeakeasyBase {
    date: Date;
}
export declare class ValuesInPastGetRequest extends SpeakeasyBase {
    pathParams: ValuesInPastGetPathParams;
    queryParams: ValuesInPastGetQueryParams;
}
export declare class ValuesInPastGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    valuesData?: shared.ValuesData;
}
