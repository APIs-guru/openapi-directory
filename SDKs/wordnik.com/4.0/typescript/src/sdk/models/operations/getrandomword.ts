import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRandomWordQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=excludePartOfSpeech" })
  excludePartOfSpeech?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hasDictionaryDef" })
  hasDictionaryDef?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includePartOfSpeech" })
  includePartOfSpeech?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxCorpusCount" })
  maxCorpusCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxDictionaryCount" })
  maxDictionaryCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxLength" })
  maxLength?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minCorpusCount" })
  minCorpusCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minDictionaryCount" })
  minDictionaryCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minLength" })
  minLength?: number;
}


export class GetRandomWordRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRandomWordQueryParams;
}


export class GetRandomWordResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
