import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFamilyDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class GetFamilyDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFamilyDetailsQueryParams;
}


export class GetFamilyDetails200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=definition" })
  definition?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=hypernyms" })
  hypernyms?: number[][];

  @Metadata({ data: "json, name=permId" })
  permId?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=wikidata" })
  wikidata?: string;

  @Metadata({ data: "json, name=wordnet30" })
  wordnet30?: string;
}


export class GetFamilyDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getFamilyDetails200ApplicationJsonObject?: GetFamilyDetails200ApplicationJson;
}
