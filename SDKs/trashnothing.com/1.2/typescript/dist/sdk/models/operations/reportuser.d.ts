import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportUserRequestBody extends SpeakeasyBase {
    groupId?: string;
    message: string;
    subject: string;
    userEmail?: string;
    userId?: string;
}
export declare class ReportUserRequest extends SpeakeasyBase {
    request: ReportUserRequestBody;
}
export declare class ReportUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
