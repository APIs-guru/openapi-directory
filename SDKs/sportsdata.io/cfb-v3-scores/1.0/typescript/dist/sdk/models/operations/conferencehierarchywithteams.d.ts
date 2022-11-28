import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConferenceHierarchyWithTeamsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ConferenceHierarchyWithTeamsPathParams extends SpeakeasyBase {
    format: ConferenceHierarchyWithTeamsFormatEnum;
}
export declare class ConferenceHierarchyWithTeamsRequest extends SpeakeasyBase {
    pathParams: ConferenceHierarchyWithTeamsPathParams;
}
export declare class ConferenceHierarchyWithTeamsResponse extends SpeakeasyBase {
    conferences?: any[];
    contentType: string;
    statusCode: number;
}
