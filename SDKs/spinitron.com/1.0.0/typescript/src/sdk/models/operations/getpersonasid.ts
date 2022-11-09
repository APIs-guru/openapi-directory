import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPersonasIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetPersonasIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string[];
}


export class GetPersonasIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPersonasIdPathParams;

  @Metadata()
  queryParams: GetPersonasIdQueryParams;
}


export class GetPersonasIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  persona?: shared.Persona;

  @Metadata()
  statusCode: number;
}
