import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiMiscCulturesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiMiscCulturesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetApiMiscCulturesHeaders;
}


export class GetApiMiscCulturesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
