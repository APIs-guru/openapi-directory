import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutDriversIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutDriversIdRequest extends SpeakeasyBase {
    pathParams: PutDriversIdPathParams;
    request: shared.Driver;
}
export declare class PutDriversIdResponse extends SpeakeasyBase {
    contentType: string;
    driver?: shared.Driver;
    statusCode: number;
}
