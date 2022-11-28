import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContactModeratorsPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class ContactModeratorsRequestBody extends SpeakeasyBase {
    message: string;
    subject: string;
}
export declare class ContactModeratorsRequest extends SpeakeasyBase {
    pathParams: ContactModeratorsPathParams;
    request: ContactModeratorsRequestBody;
}
export declare class ContactModeratorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
