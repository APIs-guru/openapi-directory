import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateContactInMailinglistPathParams extends SpeakeasyBase {
    directoryId: string;
    mailingListId: string;
}
export declare class CreateContactInMailinglistRequest extends SpeakeasyBase {
    pathParams: CreateContactInMailinglistPathParams;
    request: shared.CreateContactInMailingList;
}
export declare class CreateContactInMailinglistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
