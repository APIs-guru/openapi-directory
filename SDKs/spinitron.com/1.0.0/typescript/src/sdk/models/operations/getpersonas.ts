import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPersonasQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;
}


export class GetPersonas200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: shared.Link;
}


export class GetPersonas200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetPersonas200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=_meta" })
  meta?: shared.Pagination;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.Persona })
  items?: shared.Persona[];
}


export class GetPersonasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPersonasQueryParams;
}


export class GetPersonasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPersonas200ApplicationJsonObject?: GetPersonas200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
