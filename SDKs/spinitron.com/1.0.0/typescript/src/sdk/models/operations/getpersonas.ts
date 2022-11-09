import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPersonasQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetPersonasRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPersonasQueryParams;
}


export class GetPersonas200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: shared.Link;
}


export class GetPersonas200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: GetPersonas200ApplicationJsonLinks;

  @Metadata({ data: "json, name=_meta" })
  meta?: shared.Pagination;

  @Metadata({ data: "json, name=items", elemType: shared.Persona })
  items?: shared.Persona[];
}


export class GetPersonasResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getPersonas200ApplicationJsonObject?: GetPersonas200ApplicationJson;

  @Metadata()
  statusCode: number;
}
