import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCallsQueryParams extends SpeakeasyBase {
    validate?: number;
}
export declare class GetCallsRequest extends SpeakeasyBase {
    queryParams: GetCallsQueryParams;
}
export declare class GetCallsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    oneGetResponses200ContentApplication1jsonSchema?: shared.OneGetResponses200ContentApplication1jsonSchema;
    oneannouncementsPostResponses400ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses400ContentApplication1jsonSchema;
    oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
