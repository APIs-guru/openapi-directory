import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTextPronunciationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetTextPronunciationsSourceDictionaryEnum {
    Ahd = "ahd"
,    Century = "century"
,    Cmu = "cmu"
,    Macmillan = "macmillan"
,    Wiktionary = "wiktionary"
,    Webster = "webster"
,    Wordnet = "wordnet"
}

export enum GetTextPronunciationsTypeFormatEnum {
    Ahd = "ahd"
,    Arpabet = "arpabet"
,    GcideDiacritical = "gcide-diacritical"
,    Ipa = "IPA"
}

export enum GetTextPronunciationsUseCanonicalEnum {
    False = "false"
,    True = "true"
}


export class GetTextPronunciationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceDictionary" })
  sourceDictionary?: GetTextPronunciationsSourceDictionaryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=typeFormat" })
  typeFormat?: GetTextPronunciationsTypeFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetTextPronunciationsUseCanonicalEnum;
}


export class GetTextPronunciationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTextPronunciationsPathParams;

  @Metadata()
  queryParams: GetTextPronunciationsQueryParams;
}


export class GetTextPronunciationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
