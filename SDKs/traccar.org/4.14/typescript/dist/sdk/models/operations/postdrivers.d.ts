import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDriversRequest extends SpeakeasyBase {
    request: shared.Driver;
}
export declare class PostDriversResponse extends SpeakeasyBase {
    contentType: string;
    driver?: shared.Driver;
    statusCode: number;
}
