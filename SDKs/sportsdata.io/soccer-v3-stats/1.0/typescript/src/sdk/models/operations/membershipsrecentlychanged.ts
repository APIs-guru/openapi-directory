import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MembershipsRecentlyChangedFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class MembershipsRecentlyChangedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=days" })
  days: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: MembershipsRecentlyChangedFormatEnum;
}


export class MembershipsRecentlyChangedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MembershipsRecentlyChangedPathParams;
}


export class MembershipsRecentlyChangedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  memberships?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
