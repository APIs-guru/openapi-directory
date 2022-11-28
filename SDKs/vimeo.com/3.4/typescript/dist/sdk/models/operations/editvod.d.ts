import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditVodPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare class EditVodRequestBodyPreorder extends SpeakeasyBase {
    active?: boolean;
    publishTime?: string;
}
export declare class EditVodRequestBodyPublish extends SpeakeasyBase {
    active?: boolean;
}
export declare class EditVodRequestBody extends SpeakeasyBase {
    link?: string;
    preorder?: EditVodRequestBodyPreorder;
    publish?: EditVodRequestBodyPublish;
    publishWhenReady?: boolean;
}
export declare class EditVodSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class EditVodRequest extends SpeakeasyBase {
    pathParams: EditVodPathParams;
    request?: EditVodRequestBody;
    security: EditVodSecurity;
}
export declare class EditVodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandPage?: shared.OnDemandPage;
}
