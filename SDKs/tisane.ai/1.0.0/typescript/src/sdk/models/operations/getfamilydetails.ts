import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFamilyDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class GetFamilyDetails200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=hypernyms" })
  hypernyms?: number[][];

  @SpeakeasyMetadata({ data: "json, name=permId" })
  permId?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=wikidata" })
  wikidata?: string;

  @SpeakeasyMetadata({ data: "json, name=wordnet30" })
  wordnet30?: string;
}


export class GetFamilyDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFamilyDetailsQueryParams;
}


export class GetFamilyDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFamilyDetails200ApplicationJsonObject?: GetFamilyDetails200ApplicationJson;
}
