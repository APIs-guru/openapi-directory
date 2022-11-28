import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ShowSourcePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ShowSourceRequest extends SpeakeasyBase {
    pathParams: ShowSourcePathParams;
}
export declare class ShowSourceResponse extends SpeakeasyBase {
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    source?: shared.Source;
    statusCode: number;
}
