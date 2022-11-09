import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SpellsFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class SpellsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: SpellsFormatEnum;
}


export class SpellsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SpellsPathParams;
}


export class SpellsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  spells?: any[];

  @Metadata()
  statusCode: number;
}
