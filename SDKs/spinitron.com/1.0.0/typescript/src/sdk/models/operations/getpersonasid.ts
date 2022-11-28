import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPersonasIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetPersonasIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string[];
}


export class GetPersonasIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPersonasIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPersonasIdQueryParams;
}


export class GetPersonasIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  persona?: shared.Persona;

  @SpeakeasyMetadata()
  statusCode: number;
}
