import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAttachmentsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteAttachmentsIdRequest extends SpeakeasyBase {
    pathParams: DeleteAttachmentsIdPathParams;
}
export declare class DeleteAttachmentsIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
