import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NewsByDateFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class NewsByDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: NewsByDateFormatEnum;
}


export class NewsByDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NewsByDatePathParams;
}


export class NewsByDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  news?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
