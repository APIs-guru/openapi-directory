import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsAllPathParams extends SpeakeasyBase {
    format: string;
}
export declare class TeamsAllRequest extends SpeakeasyBase {
    pathParams: TeamsAllPathParams;
}
export declare class TeamsAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teams?: any[];
}
