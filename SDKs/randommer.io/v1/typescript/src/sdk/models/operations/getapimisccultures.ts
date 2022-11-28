import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiMiscCulturesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiMiscCulturesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetApiMiscCulturesHeaders;
}


export class GetApiMiscCulturesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
