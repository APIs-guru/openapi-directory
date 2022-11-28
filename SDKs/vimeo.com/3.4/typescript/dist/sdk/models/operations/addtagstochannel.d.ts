import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddTagsToChannelPathParams extends SpeakeasyBase {
    channelId: number;
}
export declare class AddTagsToChannelRequestBody extends SpeakeasyBase {
    tag: string[];
}
export declare class AddTagsToChannelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddTagsToChannelRequest extends SpeakeasyBase {
    pathParams: AddTagsToChannelPathParams;
    request: AddTagsToChannelRequestBody;
    security: AddTagsToChannelSecurity;
}
export declare class AddTagsToChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    legacyError?: shared.LegacyError;
    tags?: shared.Tag[];
}
