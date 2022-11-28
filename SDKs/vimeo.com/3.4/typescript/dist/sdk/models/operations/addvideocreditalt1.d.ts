import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoCreditAlt1PathParams extends SpeakeasyBase {
    channelId: number;
    videoId: number;
}
export declare class AddVideoCreditAlt1RequestBody extends SpeakeasyBase {
    email: string;
    name: string;
    role: string;
    userUri: string;
}
export declare class AddVideoCreditAlt1Request extends SpeakeasyBase {
    pathParams: AddVideoCreditAlt1PathParams;
    request: AddVideoCreditAlt1RequestBody;
}
export declare class AddVideoCreditAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    credit?: shared.Credit;
    legacyError?: shared.LegacyError;
}
