import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRandomWordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludePartOfSpeech" })
  excludePartOfSpeech?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hasDictionaryDef" })
  hasDictionaryDef?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePartOfSpeech" })
  includePartOfSpeech?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxCorpusCount" })
  maxCorpusCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDictionaryCount" })
  maxDictionaryCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxLength" })
  maxLength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minCorpusCount" })
  minCorpusCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minDictionaryCount" })
  minDictionaryCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minLength" })
  minLength?: number;
}


export class GetRandomWordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRandomWordQueryParams;
}


export class GetRandomWordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
