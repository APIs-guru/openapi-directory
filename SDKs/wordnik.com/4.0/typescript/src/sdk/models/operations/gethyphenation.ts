import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHyphenationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetHyphenationSourceDictionaryEnum {
    Ahd = "ahd",
    Century = "century",
    Wiktionary = "wiktionary",
    Webster = "webster",
    Wordnet = "wordnet"
}

export enum GetHyphenationUseCanonicalEnum {
    False = "false",
    True = "true"
}


export class GetHyphenationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceDictionary" })
  sourceDictionary?: GetHyphenationSourceDictionaryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetHyphenationUseCanonicalEnum;
}


export class GetHyphenationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHyphenationPathParams;

  @SpeakeasyMetadata()
  queryParams: GetHyphenationQueryParams;
}


export class GetHyphenationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
