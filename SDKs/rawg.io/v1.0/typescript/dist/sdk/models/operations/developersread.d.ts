import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DevelopersReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DevelopersReadRequest extends SpeakeasyBase {
    pathParams: DevelopersReadPathParams;
}
export declare class DevelopersReadResponse extends SpeakeasyBase {
    contentType: string;
    developerSingle?: shared.DeveloperSingle;
    statusCode: number;
}
