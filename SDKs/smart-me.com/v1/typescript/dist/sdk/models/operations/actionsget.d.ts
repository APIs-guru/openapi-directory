import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ActionsGetRequest extends SpeakeasyBase {
    pathParams: ActionsGetPathParams;
}
export declare class ActionsGetResponse extends SpeakeasyBase {
    actionInformations?: shared.ActionInformation[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
