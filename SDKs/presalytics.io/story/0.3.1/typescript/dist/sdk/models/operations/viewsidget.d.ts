import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ViewsIdGetPathParams extends SpeakeasyBase {
    viewId: string;
}
export declare class ViewsIdGetRequest extends SpeakeasyBase {
    pathParams: ViewsIdGetPathParams;
}
export declare class ViewsIdGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemDetail?: any;
    view?: shared.View;
}
