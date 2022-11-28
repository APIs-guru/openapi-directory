import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiCardTypesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiCardTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetApiCardTypesHeaders;
}


export class GetApiCardTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
