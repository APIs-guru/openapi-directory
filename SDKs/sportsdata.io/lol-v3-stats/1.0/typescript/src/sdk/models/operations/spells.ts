import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SpellsFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class SpellsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: SpellsFormatEnum;
}


export class SpellsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SpellsPathParams;
}


export class SpellsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spells?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
