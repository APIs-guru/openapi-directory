import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiCardTypesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiCardTypesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetApiCardTypesHeaders;
}


export class GetApiCardTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
