import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConferenceHierarchyWithTeamsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class ConferenceHierarchyWithTeamsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ConferenceHierarchyWithTeamsFormatEnum;
}


export class ConferenceHierarchyWithTeamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConferenceHierarchyWithTeamsPathParams;
}


export class ConferenceHierarchyWithTeamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conferences?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
