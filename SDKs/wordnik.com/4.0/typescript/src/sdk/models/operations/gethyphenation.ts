import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHyphenationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetHyphenationSourceDictionaryEnum {
    Ahd = "ahd"
,    Century = "century"
,    Wiktionary = "wiktionary"
,    Webster = "webster"
,    Wordnet = "wordnet"
}

export enum GetHyphenationUseCanonicalEnum {
    False = "false"
,    True = "true"
}


export class GetHyphenationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceDictionary" })
  sourceDictionary?: GetHyphenationSourceDictionaryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetHyphenationUseCanonicalEnum;
}


export class GetHyphenationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetHyphenationPathParams;

  @Metadata()
  queryParams: GetHyphenationQueryParams;
}


export class GetHyphenationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
