import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListWordSensesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=word" })
  word?: string;
}


export class ListWordSenses200ApplicationJsonFamilies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: string;
}


export class ListWordSenses200ApplicationJsonFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ListWordSenses200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=families", elemType: ListWordSenses200ApplicationJsonFamilies })
  families?: ListWordSenses200ApplicationJsonFamilies[];

  @SpeakeasyMetadata({ data: "json, name=features", elemType: ListWordSenses200ApplicationJsonFeatures })
  features?: ListWordSenses200ApplicationJsonFeatures[];

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: number;

  @SpeakeasyMetadata({ data: "json, name=isLemma" })
  isLemma?: boolean;

  @SpeakeasyMetadata({ data: "json, name=legacyMapId" })
  legacyMapId?: number;

  @SpeakeasyMetadata({ data: "json, name=lemma" })
  lemma?: string;

  @SpeakeasyMetadata({ data: "json, name=lexemeId" })
  lexemeId?: number;
}


export class ListWordSensesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListWordSensesQueryParams;
}


export class ListWordSensesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: ListWordSenses200ApplicationJson })
  listWordSenses200ApplicationJsonObjects?: ListWordSenses200ApplicationJson[];
}
