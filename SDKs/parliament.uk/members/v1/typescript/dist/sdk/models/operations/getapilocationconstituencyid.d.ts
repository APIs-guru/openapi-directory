import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiLocationConstituencyIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiLocationConstituencyIdRequest extends SpeakeasyBase {
    pathParams: GetApiLocationConstituencyIdPathParams;
}
export declare class GetApiLocationConstituencyIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    constituencyItem?: shared.ConstituencyItem;
    contentType: string;
    statusCode: number;
}
