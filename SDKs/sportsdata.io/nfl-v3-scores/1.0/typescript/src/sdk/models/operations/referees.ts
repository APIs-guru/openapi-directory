import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RefereesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class RefereesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: RefereesFormatEnum;
}


export class RefereesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RefereesPathParams;
}


export class RefereesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  referees?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
