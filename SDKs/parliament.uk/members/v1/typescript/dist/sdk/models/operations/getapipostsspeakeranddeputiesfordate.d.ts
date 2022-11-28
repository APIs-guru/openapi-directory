import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiPostsSpeakerAndDeputiesForDatePathParams extends SpeakeasyBase {
    forDate: Date;
}
export declare class GetApiPostsSpeakerAndDeputiesForDateRequest extends SpeakeasyBase {
    pathParams: GetApiPostsSpeakerAndDeputiesForDatePathParams;
}
export declare class GetApiPostsSpeakerAndDeputiesForDateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    memberItems?: shared.MemberItem[];
    statusCode: number;
}
