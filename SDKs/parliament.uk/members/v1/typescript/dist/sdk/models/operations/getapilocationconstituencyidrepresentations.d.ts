import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiLocationConstituencyIdRepresentationsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiLocationConstituencyIdRepresentationsRequest extends SpeakeasyBase {
    pathParams: GetApiLocationConstituencyIdRepresentationsPathParams;
}
export declare class GetApiLocationConstituencyIdRepresentationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    constituencyRepresentationListItem?: shared.ConstituencyRepresentationListItem;
    contentType: string;
    statusCode: number;
}
