import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetLanguagesFilterEnum {
    Texttracks = "texttracks"
}


export class GetLanguagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetLanguagesFilterEnum;
}


export class GetLanguagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLanguagesQueryParams;
}


export class GetLanguagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Language })
  languages?: shared.Language[];
}
