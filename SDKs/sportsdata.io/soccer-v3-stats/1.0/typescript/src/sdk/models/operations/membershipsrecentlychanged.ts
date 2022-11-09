import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MembershipsRecentlyChangedFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class MembershipsRecentlyChangedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=days" })
  days: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: MembershipsRecentlyChangedFormatEnum;
}


export class MembershipsRecentlyChangedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MembershipsRecentlyChangedPathParams;
}


export class MembershipsRecentlyChangedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  memberships?: any[];

  @Metadata()
  statusCode: number;
}
