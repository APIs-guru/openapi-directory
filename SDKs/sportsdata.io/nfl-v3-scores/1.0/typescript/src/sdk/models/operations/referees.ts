import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RefereesFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class RefereesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: RefereesFormatEnum;
}


export class RefereesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RefereesPathParams;
}


export class RefereesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  referees?: any[];

  @Metadata()
  statusCode: number;
}
