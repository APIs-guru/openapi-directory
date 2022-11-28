import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateEsimProfileServerList: readonly ["https://supersim.twilio.com"];
export declare enum CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateEsimProfileCreateEsimProfileRequest extends SpeakeasyBase {
    callbackMethod?: CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum;
    callbackUrl?: string;
    eid?: string;
}
export declare class CreateEsimProfileSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateEsimProfileRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateEsimProfileCreateEsimProfileRequest;
    security: CreateEsimProfileSecurity;
}
export declare class CreateEsimProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1EsimProfile?: shared.SupersimV1EsimProfile;
}
