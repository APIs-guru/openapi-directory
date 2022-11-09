import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TeamsActivePathParams extends SpeakeasyBase {
    format: string;
}
export declare class TeamsActiveRequest extends SpeakeasyBase {
    pathParams: TeamsActivePathParams;
}
export declare class TeamsActiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teams?: any[];
}
