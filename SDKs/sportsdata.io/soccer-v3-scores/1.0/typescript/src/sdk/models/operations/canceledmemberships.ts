import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CanceledMembershipsFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class CanceledMembershipsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CanceledMembershipsFormatEnum;
}


export class CanceledMembershipsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CanceledMembershipsPathParams;
}


export class CanceledMembershipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  canceledMembership?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
