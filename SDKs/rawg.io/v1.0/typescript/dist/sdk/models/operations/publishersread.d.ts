import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishersReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PublishersReadRequest extends SpeakeasyBase {
    pathParams: PublishersReadPathParams;
}
export declare class PublishersReadResponse extends SpeakeasyBase {
    contentType: string;
    publisherSingle?: shared.PublisherSingle;
    statusCode: number;
}
