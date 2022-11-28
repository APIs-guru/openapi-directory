import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelTagsPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare class GetChannelTagsRequest extends SpeakeasyBase {
    pathParams: GetChannelTagsPathParams;
}
export declare class GetChannelTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    tags?: shared.Tag[];
}
