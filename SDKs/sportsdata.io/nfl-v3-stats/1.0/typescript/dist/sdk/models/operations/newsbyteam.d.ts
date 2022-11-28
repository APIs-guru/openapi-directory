import { SpeakeasyBase } from "../../../internal/utils";
export declare class NewsByTeamPathParams extends SpeakeasyBase {
    format: string;
    team: string;
}
export declare class NewsByTeamRequest extends SpeakeasyBase {
    pathParams: NewsByTeamPathParams;
}
export declare class NewsByTeamResponse extends SpeakeasyBase {
    contentType: string;
    news?: any[];
    statusCode: number;
}
