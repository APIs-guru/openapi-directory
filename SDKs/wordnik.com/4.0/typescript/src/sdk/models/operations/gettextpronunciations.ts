import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTextPronunciationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetTextPronunciationsSourceDictionaryEnum {
    Ahd = "ahd",
    Century = "century",
    Cmu = "cmu",
    Macmillan = "macmillan",
    Wiktionary = "wiktionary",
    Webster = "webster",
    Wordnet = "wordnet"
}

export enum GetTextPronunciationsTypeFormatEnum {
    Ahd = "ahd",
    Arpabet = "arpabet",
    GcideDiacritical = "gcide-diacritical",
    Ipa = "IPA"
}

export enum GetTextPronunciationsUseCanonicalEnum {
    False = "false",
    True = "true"
}


export class GetTextPronunciationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceDictionary" })
  sourceDictionary?: GetTextPronunciationsSourceDictionaryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=typeFormat" })
  typeFormat?: GetTextPronunciationsTypeFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetTextPronunciationsUseCanonicalEnum;
}


export class GetTextPronunciationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTextPronunciationsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTextPronunciationsQueryParams;
}


export class GetTextPronunciationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
