import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateCompositionServerList: readonly ["https://video.twilio.com"];
export declare enum CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateCompositionCreateCompositionRequest extends SpeakeasyBase {
    audioSources?: string[];
    audioSourcesExcluded?: string[];
    format?: shared.CompositionEnumFormatEnum;
    resolution?: string;
    roomSid: string;
    statusCallback?: string;
    statusCallbackMethod?: CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum;
    trim?: boolean;
    videoLayout?: any;
}
export declare class CreateCompositionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateCompositionRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateCompositionCreateCompositionRequest;
    security: CreateCompositionSecurity;
}
export declare class CreateCompositionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1Composition?: shared.VideoV1Composition;
}
