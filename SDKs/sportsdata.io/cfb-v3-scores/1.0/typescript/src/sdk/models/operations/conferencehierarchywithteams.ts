import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConferenceHierarchyWithTeamsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class ConferenceHierarchyWithTeamsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ConferenceHierarchyWithTeamsFormatEnum;
}


export class ConferenceHierarchyWithTeamsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConferenceHierarchyWithTeamsPathParams;
}


export class ConferenceHierarchyWithTeamsResponse extends SpeakeasyBase {
  @Metadata()
  conferences?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
