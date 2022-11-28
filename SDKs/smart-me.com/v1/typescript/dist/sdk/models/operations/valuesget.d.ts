import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValuesGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ValuesGetRequest extends SpeakeasyBase {
    pathParams: ValuesGetPathParams;
}
export declare class ValuesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    valuesData?: shared.ValuesData;
}
