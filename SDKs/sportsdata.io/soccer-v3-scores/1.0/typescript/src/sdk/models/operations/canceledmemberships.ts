import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CanceledMembershipsFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class CanceledMembershipsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CanceledMembershipsFormatEnum;
}


export class CanceledMembershipsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CanceledMembershipsPathParams;
}


export class CanceledMembershipsResponse extends SpeakeasyBase {
  @Metadata()
  canceledMembership?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
