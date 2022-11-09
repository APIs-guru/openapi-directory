import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListWordSensesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=word" })
  word?: string;
}


export class ListWordSensesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListWordSensesQueryParams;
}


export class ListWordSenses200ApplicationJsonFamilies extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: number;

  @Metadata({ data: "json, name=Value" })
  value?: Map<string, any>;

  @Metadata({ data: "json, name=definition" })
  definition?: string;
}


export class ListWordSenses200ApplicationJsonFeatures extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ListWordSenses200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=families", elemType: operations.ListWordSenses200ApplicationJsonFamilies })
  families?: ListWordSenses200ApplicationJsonFamilies[];

  @Metadata({ data: "json, name=features", elemType: operations.ListWordSenses200ApplicationJsonFeatures })
  features?: ListWordSenses200ApplicationJsonFeatures[];

  @Metadata({ data: "json, name=frequency" })
  frequency?: number;

  @Metadata({ data: "json, name=isLemma" })
  isLemma?: boolean;

  @Metadata({ data: "json, name=legacyMapId" })
  legacyMapId?: number;

  @Metadata({ data: "json, name=lemma" })
  lemma?: string;

  @Metadata({ data: "json, name=lexemeId" })
  lexemeId?: number;
}


export class ListWordSensesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.ListWordSenses200ApplicationJson })
  listWordSenses200ApplicationJsonObjects?: ListWordSenses200ApplicationJson[];
}
